import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { Hercules } from '../../Hercules';
import { CheckBox } from '..';

describe('CheckBox', () => {
  afterEach(cleanup);

  test('should not have accessibility violations', async () => {
    const { container } = render(
      <Hercules>
        <CheckBox a11yTitle="test" />
      </Hercules>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('label should not have accessibility violations', async () => {
    const { container } = render(
      <Hercules>
        <CheckBox label="test" />
      </Hercules>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBox />
        <CheckBox id="test id" name="test name" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('label renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBox label="test label" />
        <CheckBox label={<div>test label</div>} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('checked renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBox checked />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBox disabled />
        <CheckBox disabled checked />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('reverse renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBox reverse label="test label" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('toggle renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBox toggle />
        <CheckBox toggle checked />
        <CheckBox toggle label="test label" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('indeterminate renders', () => {
    const component = renderer.create(
      <Hercules>
        <CheckBox indeterminate />
        <CheckBox indeterminate label="test label" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('indeterminate checked warns', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    render(
      <Hercules>
        <CheckBox indeterminate checked />
      </Hercules>,
    );
    expect(warnSpy).toBeCalledWith(
      'Checkbox cannot be "checked" and "indeterminate" at the same time.',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('indeterminate toggle warns', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    render(
      <Hercules>
        <CheckBox indeterminate toggle />
      </Hercules>,
    );
    expect(warnSpy).toBeCalledWith(
      'Checkbox of type toggle does not have "indeterminate" state.',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('controlled', () => {
    const { container, getByText } = render(
      <Hercules>
        <CheckBox label="test-label" checked />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('test-label'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
