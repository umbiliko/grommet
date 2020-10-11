import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { cleanup, render, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Hercules } from '../../Hercules';
import { CheckBoxGroup } from '..';

describe('CheckBoxGroup', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Hercules>
        <CheckBoxGroup options={['First', 'Second']} />
      </Hercules>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('options renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBoxGroup options={['First', 'Second']} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('value renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBoxGroup value={['First']} options={['First', 'Second']} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('initial value renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBoxGroup
          value={['Wuhan', 'Jerusalem']}
          options={[
            { label: 'Maui', value: 'Maui' },
            { label: 'Jerusalem', value: 'Jerusalem' },
            { label: 'Wuhan', value: 'Wuhan' },
          ]}
        />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBoxGroup disabled options={['First', 'Second']} />
        <CheckBoxGroup options={[{ label: 'First', disabled: true }]} />
        <CheckBoxGroup options={[{ label: 'First', disabled: true }]} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onChange', () => {
    const onChange = jest.fn();
    const { container, getByText } = render(
      <Hercules>
        <CheckBoxGroup
          options={[
            { label: 'first-label', value: 'First' },
            { label: 'second-label', value: 'Second' },
          ]}
          onChange={onChange}
        />
      </Hercules>,
    );
    fireEvent.click(getByText('first-label'));
    expect(onChange).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('onClick for check and uncheck a CheckBox', () => {
    const onClick = jest.fn();
    const { container, getByText } = render(
      <Hercules>
        <CheckBoxGroup
          options={[
            { label: 'first-label', value: 'First' },
            { label: 'second-label', value: 'Second' },
          ]}
          onClick={onClick}
        />
      </Hercules>,
    );
    fireEvent.click(getByText('first-label'));
    expect(onClick).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('first-label'));
    expect(onClick).toBeCalledTimes(2);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('labelKey', () => {
    const { container } = render(
      <Hercules>
        <CheckBoxGroup
          labelKey="labelKeyTest"
          options={[
            { labelKeyTest: 'first-label', value: 'First' },
            { labelKeyTest: 'second-label', value: 'Second' },
          ]}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('valueKey', () => {
    const { container } = render(
      <Hercules>
        <CheckBoxGroup
          valueKey="valueKeyTest"
          options={[
            { label: 'first-label', valueKeyTest: 'First' },
            { label: 'second-label', valueKeyTest: 'Second' },
          ]}
        />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('no duplicated key error', () => {
    console.error = jest.fn();
    const errorSpy = jest.spyOn(console, 'error');

    render(
      <Hercules>
        <CheckBoxGroup
          value={['yes', 'yes-again']}
          options={[
            { label: 'Yes!', value: 'yes' },
            { label: 'Yes!', value: 'yes-again' },
          ]}
        />
      </Hercules>,
    );

    expect(errorSpy).not.toBeCalledWith(
      expect.stringMatching('same key'),
      expect.stringMatching('Yes!'),
      expect.anything(),
    );

    errorSpy.mockReset();
    errorSpy.mockRestore();
    console.error.mockReset();
  });

  test('checked warning', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');

    render(
      <Hercules>
        <CheckBoxGroup
          options={[
            { label: 'first-label', value: 'First', checked: true },
            { label: 'second-label', value: 'Second' },
          ]}
        />
      </Hercules>,
    );

    expect(warnSpy).toBeCalled();
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
});
