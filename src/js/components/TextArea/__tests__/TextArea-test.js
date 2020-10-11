import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { Hercules } from '../../Hercules';
import { TextArea } from '..';

describe('TextArea', () => {
  afterEach(cleanup);

  test('should not have accessibility violations', async () => {
    const { container } = render(
      <Hercules>
        <TextArea a11yTitle="test" id="item" name="item" />
      </Hercules>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('basic', () => {
    const component = renderer.create(
      <Hercules>
        <TextArea id="item" name="item" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('placeholder', () => {
    const component = renderer.create(
      <Hercules>
        <TextArea id="item" name="item" placeholder="placeholder" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('plain', () => {
    const component = renderer.create(
      <Hercules>
        <TextArea id="item" name="item" plain />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled', () => {
    const component = renderer.create(
      <Hercules>
        <TextArea disabled id="item" name="item" plain />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('focusIndicator', () => {
    const component = renderer.create(
      <Hercules>
        <TextArea id="item" name="item" focusIndicator />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('fill', () => {
    const component = renderer.create(
      <Hercules>
        <TextArea id="item" name="item" fill />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  [true, false, 'horizontal', 'vertical'].forEach(resize => {
    test(`resize ${resize}`, () => {
      const component = renderer.create(
        <Hercules>
          <TextArea id="item" name="item" resize={resize} />
        </Hercules>,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  ['small', 'medium', 'large'].forEach(size => {
    test(`size ${size}`, () => {
      const component = renderer.create(
        <Hercules>
          <TextArea id="item" name="item" size={size} />
        </Hercules>,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Event tests', () => {
    afterEach(cleanup);
    const keyEvent = {
      key: 'Backspace',
      keyCode: 8,
      which: 8,
    };

    test(`onKeyDown`, () => {
      let capturedEvent = null;
      const callback = event => {
        const { key, keyCode, which } = event;
        capturedEvent = { key, keyCode, which };
      };

      const component = render(
        <Hercules>
          <TextArea
            id="item"
            name="item"
            placeholder="item"
            onKeyDown={callback}
          />
        </Hercules>,
      );

      const textArea = component.getByPlaceholderText('item');

      fireEvent.keyDown(textArea, keyEvent);

      expect(capturedEvent).toEqual(expect.objectContaining(keyEvent));
    });

    test(`onKeyUp`, () => {
      let capturedEvent = null;
      const callback = event => {
        const { key, keyCode, which } = event;
        capturedEvent = { key, keyCode, which };
      };

      const component = render(
        <Hercules>
          <TextArea
            id="item"
            name="item"
            placeholder="item"
            onKeyUp={callback}
          />
        </Hercules>,
      );

      const textArea = component.getByPlaceholderText('item');

      fireEvent.keyUp(textArea, keyEvent);

      expect(capturedEvent).toEqual(expect.objectContaining(keyEvent));
    });

    test('onFocus', () => {
      const onFocus = jest.fn();
      const { container, getByPlaceholderText } = render(
        <Hercules>
          <TextArea name="item" placeholder="item" onFocus={onFocus} />
        </Hercules>,
      );
      fireEvent.focus(getByPlaceholderText('item'));
      expect(container.firstChild).toMatchSnapshot();
      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    test('onChange', () => {
      const onChange = jest.fn();
      const { getByPlaceholderText } = render(
        <Hercules>
          <TextArea name="item" placeholder="item" onChange={onChange} />
        </Hercules>,
      );
      const input = getByPlaceholderText('item');
      fireEvent.change(input, {
        target: { value: 'Test' },
      });
      expect(input.value).toEqual('Test');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    test('onBlur is being called', () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = render(
        <Hercules>
          <TextArea name="item" placeholder="item" onBlur={onBlur} />
        </Hercules>,
      );
      fireEvent.blur(getByPlaceholderText('item'));
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });
});
