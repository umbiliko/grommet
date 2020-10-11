import React from 'react';
import 'jest-styled-components';
import 'regenerator-runtime/runtime';
import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
} from '@testing-library/react';
import { getByText, screen } from '@testing-library/dom';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import { Search } from 'grommet-icons';

import { createPortal, expectPortal } from '../../../utils/portal';

import { Hercules } from '../../Hercules';
import { TextInput } from '..';
import { Keyboard } from '../../Keyboard';

describe('TextInput', () => {
  beforeEach(createPortal);
  afterEach(cleanup);

  test('should not have accessibility violations', async () => {
    const { container } = render(
      <Hercules>
        <TextInput a11yTitle="aria-test" name="item" />
      </Hercules>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('basic', () => {
    const { container } = render(<TextInput name="item" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('a11yTitle', () => {
    const { container } = render(
      <TextInput a11yTitle="aria-test" name="item" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('disabled', () => {
    const { container } = render(<TextInput disabled name="item" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('icon', () => {
    const { container } = render(<TextInput icon={<Search />} name="item" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('icon reverse', () => {
    const { container } = render(
      <TextInput icon={<Search />} reverse name="item" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('suggestions', done => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const { getByTestId, container } = render(
      <TextInput
        data-testid="test-input"
        id="item"
        name="item"
        suggestions={['test', 'test1']}
        onChange={onChange}
        onFocus={onFocus}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.focus(getByTestId('test-input'));
    fireEvent.change(getByTestId('test-input'), { target: { value: ' ' } });

    setTimeout(() => {
      expectPortal('text-input-drop__item').toMatchSnapshot();
      expect(onChange).toBeCalled();
      expect(onFocus).toBeCalled();

      fireEvent(
        document,
        new MouseEvent('mousedown', { bubbles: true, cancelable: true }),
      );
      expect(document.getElementById('text-input-drop__item')).toBeNull();
      done();
    }, 50);
  });

  test('complex suggestions', done => {
    const { getByTestId, container } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          suggestions={[{ label: 'test', value: 'test' }, { value: 'test1' }]}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.focus(getByTestId('test-input'));
    fireEvent.change(getByTestId('test-input'), { target: { value: ' ' } });

    setTimeout(() => {
      expectPortal('text-input-drop__item').toMatchSnapshot();

      fireEvent(
        document,
        new MouseEvent('mousedown', { bubbles: true, cancelable: true }),
      );
      expect(document.getElementById('text-input-drop__item')).toBeNull();
      done();
    }, 50);
  });

  test('close suggestion drop', done => {
    const { getByTestId, container } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          suggestions={['test', 'test1']}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.focus(getByTestId('test-input'));
    fireEvent.change(getByTestId('test-input'), { target: { value: ' ' } });
    setTimeout(() => {
      expectPortal('text-input-drop__item').toMatchSnapshot();

      fireEvent.keyDown(getByTestId('test-input'), {
        key: 'Esc',
        keyCode: 27,
        which: 27,
      });
      setTimeout(() => {
        expect(document.getElementById('text-input-drop__item')).toBeNull();
        expect(container.firstChild).toMatchSnapshot();
        done();
      }, 50);
    }, 50);
  });

  test('let escape events propagage if there are no suggestions', done => {
    const callback = jest.fn();
    const { getByTestId } = render(
      <Hercules>
        <Keyboard onEsc={callback}>
          <TextInput data-testid="test-input" id="item" name="item" />
        </Keyboard>
      </Hercules>,
    );

    fireEvent.change(getByTestId('test-input'), { target: { value: ' ' } });
    setTimeout(() => {
      fireEvent.keyDown(getByTestId('test-input'), {
        key: 'Esc',
        keyCode: 27,
        which: 27,
      });
      expect(callback).toBeCalled();
      done();
    }, 50);
  });

  test('calls onSuggestionsOpen', done => {
    const onSuggestionsOpen = jest.fn();
    const { getByTestId } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          suggestions={['test', 'test1']}
          onSuggestionsOpen={onSuggestionsOpen}
        />
      </Hercules>,
    );

    fireEvent.focus(getByTestId('test-input'));
    setTimeout(() => {
      expectPortal('text-input-drop__item').toMatchSnapshot();
      expect(onSuggestionsOpen).toBeCalled();
      done();
    }, 50);
  });

  test('calls onSuggestionsClose', done => {
    const onSuggestionsClose = jest.fn();
    const { getByTestId, container } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          suggestions={['test', 'test1']}
          onSuggestionsClose={onSuggestionsClose}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.focus(getByTestId('test-input'));
    setTimeout(() => {
      expectPortal('text-input-drop__item').toMatchSnapshot();

      fireEvent.keyDown(getByTestId('test-input'), {
        key: 'Esc',
        keyCode: 27,
        which: 27,
      });
      setTimeout(() => {
        expect(document.getElementById('text-input-drop__item')).toBeNull();
        expect(onSuggestionsClose).toBeCalled();
        expect(container.firstChild).toMatchSnapshot();
        done();
      }, 50);
    }, 50);
  });

  test('select suggestion', done => {
    const onSelect = jest.fn();
    const { getByTestId, container } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          plain
          size="large"
          id="item"
          name="item"
          suggestions={['test', 'test1']}
          onSelect={onSelect}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.focus(getByTestId('test-input'));
    fireEvent.change(getByTestId('test-input'), { target: { value: ' ' } });
    setTimeout(() => {
      expectPortal('text-input-drop__item').toMatchSnapshot();

      fireEvent.click(getByText(document, 'test1'));
      expect(container.firstChild).toMatchSnapshot();
      expect(document.getElementById('text-input-drop__item')).toBeNull();
      expect(onSelect).toBeCalledWith(
        expect.objectContaining({ suggestion: 'test1' }),
      );
      done();
    }, 50);
  });

  test('select a suggestion with onSelect', () => {
    const onSelect = jest.fn();
    const { getByTestId, container } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          suggestions={['test', { value: 'test1' }]}
          onSelect={onSelect}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const input = getByTestId('test-input');
    // pressing enter here nothing will happen
    fireEvent.keyDown(input, { keyCode: 13 }); // enter
    fireEvent.keyDown(input, { keyCode: 40 }); // down
    fireEvent.keyDown(input, { keyCode: 40 }); // down
    fireEvent.keyDown(input, { keyCode: 38 }); // up
    fireEvent.keyDown(input, { keyCode: 13 }); // enter
    expect(onSelect).toBeCalledWith(
      expect.objectContaining({
        suggestion: 'test',
      }),
    );
  });

  test('select a suggestion with onSuggestionSelect', () => {
    const onSuggestionSelect = jest.fn();
    const { getByTestId, container } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          suggestions={['test', { value: 'test1' }]}
          onSuggestionSelect={onSuggestionSelect}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const input = getByTestId('test-input');
    // pressing enter here nothing will happen
    fireEvent.keyDown(input, { keyCode: 13 }); // enter
    fireEvent.keyDown(input, { keyCode: 40 }); // down
    fireEvent.keyDown(input, { keyCode: 40 }); // down
    fireEvent.keyDown(input, { keyCode: 38 }); // up
    fireEvent.keyDown(input, { keyCode: 13 }); // enter
    expect(onSuggestionSelect).toBeCalledWith(
      expect.objectContaining({
        suggestion: 'test',
      }),
    );
  });

  test('select with onSuggestionSelect when onSelect is present', () => {
    const onSelect = jest.fn();
    const onSuggestionSelect = jest.fn();
    const { getByTestId, container } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          suggestions={['test', { value: 'test1' }]}
          onSelect={onSelect}
          onSuggestionSelect={onSuggestionSelect}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const input = getByTestId('test-input');
    // pressing enter here nothing will happen
    fireEvent.keyDown(input, { keyCode: 13 }); // enter
    fireEvent.keyDown(input, { keyCode: 40 }); // down
    fireEvent.keyDown(input, { keyCode: 40 }); // down
    fireEvent.keyDown(input, { keyCode: 38 }); // up
    fireEvent.keyDown(input, { keyCode: 13 }); // enter
    expect(onSuggestionSelect).toBeCalledWith(
      expect.objectContaining({
        suggestion: 'test',
      }),
    );
  });

  test('handles next and previous without suggestion', () => {
    const onSelect = jest.fn();
    const { getByTestId, container } = render(
      <Hercules>
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          onSelect={onSelect}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const input = getByTestId('test-input');
    fireEvent.keyDown(input, { keyCode: 40 });
    fireEvent.keyDown(input, { keyCode: 40 });
    fireEvent.keyDown(input, { keyCode: 38 });
    fireEvent.keyDown(input, { keyCode: 13 }); // enter
    expect(onSelect).not.toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  ['small', 'medium', 'large'].forEach(dropHeight => {
    test(`${dropHeight} drop height`, done => {
      const { getByTestId } = render(
        <TextInput
          data-testid="test-input"
          id="item"
          name="item"
          suggestions={['test', 'test1']}
          dropHeight={dropHeight}
        />,
      );

      fireEvent.focus(getByTestId('test-input'));
      setTimeout(() => {
        expectPortal('text-input-drop__item').toMatchSnapshot();
        done();
      }, 50);
    });
  });

  test('should return focus to input on select', async () => {
    const onSelect = jest.fn();
    const { getByPlaceholderText } = render(
      <Hercules>
        <TextInput
          data-testid="test-input-focus"
          id="input-focus"
          name="input-focus"
          placeholder="Type to search..."
          suggestions={['option0', 'option1', 'option2']}
          onSelect={onSelect}
        />
      </Hercules>,
    );

    const input = getByPlaceholderText('Type to search...');

    expect(document.activeElement).not.toEqual(input);
    fireEvent.focus(input);
    expect(document.activeElement).not.toEqual(input);

    const selection = await waitForElement(() => screen.getByText('option1'));

    fireEvent.click(selection);
    expect(document.activeElement).toEqual(input);
  });

  test('should return focus to ref on select', async () => {
    const inputRef = { current: {} };
    const onSelect = jest.fn();
    const { getByPlaceholderText } = render(
      <Hercules>
        <TextInput
          data-testid="test-input-focus"
          id="input-focus"
          name="input-focus"
          placeholder="Type to search..."
          suggestions={['option0', 'option1', 'option2']}
          onSelect={onSelect}
          ref={inputRef}
        />
      </Hercules>,
    );

    const input = getByPlaceholderText('Type to search...');

    expect(document.activeElement).not.toEqual(input);
    fireEvent.focus(input);
    expect(document.activeElement).not.toEqual(input);

    const selection = await waitForElement(() => screen.getByText('option2'));

    fireEvent.click(selection);
    expect(document.activeElement).toEqual(input);
  });

  test('should not have padding when plain="full"', async () => {
    const { container } = render(
      <Hercules>
        <TextInput
          plain="full"
          name="name"
          placeholder="should not have padding"
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should have padding when plain', async () => {
    const { container } = render(
      <Hercules>
        <TextInput plain name="name" placeholder="should still have padding" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
