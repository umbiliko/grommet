import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Hercules } from '../../Hercules';
import { RangeInput } from '..';

describe('RangeInput', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Hercules>
        <RangeInput value="50" a11yTitle="test" />
      </Hercules>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  test('renders', () => {
    const component = renderer.create(
      <Hercules>
        <RangeInput value="50" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('track themed', () => {
    const component = renderer.create(
      <Hercules theme={{ rangeInput: { track: { color: 'brand' } } }}>
        <RangeInput value="10" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('track themed with color and opacity', () => {
    const component = renderer.create(
      <Hercules
        theme={{ rangeInput: { track: { color: 'brand', opacity: 0.3 } } }}
      >
        <RangeInput value="10" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('with min and max offset', () => {
    const component = renderer.create(
      <Hercules>
        <RangeInput min={10} max={20} step={1} value={15} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onFocus', () => {
    const onFocus = jest.fn();
    const { container, getByDisplayValue } = render(
      <Hercules>
        <RangeInput min={0} max={10} step={1} value={5} onFocus={onFocus} />
      </Hercules>,
    );
    fireEvent.focus(getByDisplayValue('5'));
    expect(container.firstChild).toMatchSnapshot();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  test('onBlur', () => {
    const onBlur = jest.fn();
    const { container, getByDisplayValue } = render(
      <Hercules>
        <RangeInput min={0} max={10} step={1} value={5} onBlur={onBlur} />
      </Hercules>,
    );
    fireEvent.blur(getByDisplayValue('5'));
    expect(container.firstChild).toMatchSnapshot();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test('onChange', () => {
    const onChange = jest.fn();
    const { container, getByDisplayValue } = render(
      <Hercules>
        <RangeInput min={0} max={10} step={1} value={5} onChange={onChange} />
      </Hercules>,
    );
    fireEvent.change(getByDisplayValue('5'), {
      target: {
        value: '10',
      },
    });
    expect(container.firstChild).toMatchSnapshot();
    expect(onChange).toBeCalledTimes(1);
  });
});
