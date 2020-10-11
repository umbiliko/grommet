import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, render, fireEvent, wait } from '@testing-library/react';
import { Hercules } from '../../Hercules';
import { Box } from '../../Box';
import { RadioButtonGroup } from '..';

describe('RadioButtonGroup', () => {
  afterEach(cleanup);
  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Hercules>
        <RadioButtonGroup name="test" options={[]} />
      </Hercules>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  test('string options', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButtonGroup name="test" options={['one', 'two']} value="one" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('number options', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButtonGroup name="test" options={[1, 2]} value={1} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('boolean options', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButtonGroup name="test" options={[true, false]} value />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('object options just value', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButtonGroup
          name="test"
          options={[{ value: 'one' }, { value: 'two' }]}
          value="two"
        />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('object options', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButtonGroup
          name="test"
          options={[
            { id: 'onE', label: 'One', value: 'one' },
            { id: 'twO', label: 'Two', value: 'two' },
          ]}
        />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('object options disabled', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButtonGroup
          name="test"
          options={[{ value: 'one', disabled: true }, { value: 'two' }]}
        />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('children', () => {
    const child = ({ checked }) => (
      <Box pad="small" background={checked ? 'accent-1' : 'control'} />
    );
    const component = renderer.create(
      <Hercules>
        <RadioButtonGroup name="test" options={['one', 'two']} value="one">
          {child}
        </RadioButtonGroup>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('adding additional props', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButtonGroup
          name="test"
          options={[
            {
              id: 'ONE',
              value: '1',
              'data-testid': 'testid-1',
            },
            {
              id: 'TWO',
              value: '2',
              'data-testid': 'testid-2',
            },
          ]}
        />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onChange fires with event when passed from props', () => {
    const radioGroupOptions = [
      {
        id: 'ONE',
        value: '1',
        'data-testid': 'testid-1',
      },
      {
        id: 'TWO',
        value: '2',
        'data-testid': 'testid-2',
      },
    ];

    const onChange = jest.fn(event => {
      expect(event).toBeDefined();
      expect(event).toHaveProperty(['target', 'value']);

      const { target } = event;
      const option = radioGroupOptions.find(
        optn => target.value === optn.value,
      );

      expect(option).not.toBeNull();
      expect(target.value).toEqual(option.value);
    });

    const { getByTestId } = render(
      <Hercules>
        <RadioButtonGroup
          name="test"
          options={radioGroupOptions}
          onChange={onChange}
        />
      </Hercules>,
    );

    // Select first radio button
    fireEvent.click(getByTestId('testid-1'));
    expect(onChange).toBeCalledTimes(1);

    // Select first radio button again - should not trigger onChange
    fireEvent.click(getByTestId('testid-1'));
    expect(onChange).toBeCalledTimes(1);

    // Select second radio button
    fireEvent.click(getByTestId('testid-2'));
    expect(onChange).toBeCalledTimes(2);
  });

  test('Works with keyboard', async () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <Hercules>
        <RadioButtonGroup
          name="test"
          value="2"
          options={[
            {
              id: 'ONE',
              value: '1',
              'data-testid': 'testid-1',
            },
            {
              id: 'TWO',
              value: '2',
              'data-testid': 'testid-2',
            },
            {
              id: 'THREE',
              value: '3',
              'data-testid': 'testid-3',
            },
          ]}
          onChange={onChange}
        />
      </Hercules>,
    );

    // Focus radio '2' button and simulate ArrowDown key
    // should result in selecting radio '3'
    const middleRadioBtn = getByTestId('testid-2');
    middleRadioBtn.focus();

    // focusing the radio button results in internal state update
    // so we wait (`act`) after focusing

    await wait(() => getByTestId('testid-2'));
    fireEvent.keyDown(middleRadioBtn, {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40,
      bubbles: true,
      cancelable: true,
    });
    await wait(() => expect(onChange).toBeCalledTimes(1));
    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ target: { value: '3' } }),
    );

    // Focus radio '2' button and simulate ArrowUp key
    // should result in selecting radio '1'
    middleRadioBtn.focus();
    await wait(() => getByTestId('testid-2'));
    fireEvent.keyDown(middleRadioBtn, {
      key: 'ArrowUp',
      keyCode: 38,
      which: 38,
      bubbles: true,
      cancelable: true,
    });
    await wait(() => expect(onChange).toBeCalledTimes(2));
    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ target: { value: '1' } }),
    );
  });
});
