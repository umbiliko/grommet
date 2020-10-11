import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, render } from '@testing-library/react';
import { Hercules } from '../../Hercules';
import { Box } from '../../Box';
import { RadioButton } from '..';

describe('RadioButton', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Hercules>
        <RadioButton name="test" a11yTitle="test" />
      </Hercules>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  test('basic', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButton name="test" value="1" />
        <RadioButton id="test id" name="test" value="2" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('label', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButton label="test label" name="test" value="1" />
        <RadioButton label={<div>test label</div>} name="test" value="2" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('checked', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButton checked name="test" value="1" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled', () => {
    const component = renderer.create(
      <Hercules>
        <RadioButton disabled name="test" value="1" />
        <RadioButton disabled checked name="test" value="2" />
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
        <RadioButton name="test" value="1">
          {child}
        </RadioButton>
        <RadioButton checked name="test" value="2">
          {child}
        </RadioButton>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('label themed', () => {
    const customTheme = {
      radioButton: {
        font: {
          weight: 500,
        },
      },
    };
    const component = renderer.create(
      <Hercules theme={customTheme}>
        <RadioButton label="test" name="test" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('background-color themed', () => {
    const customTheme = {
      radioButton: {
        check: {
          background: {
            color: 'red',
          },
        },
      },
    };

    const component = renderer.create(
      <Hercules theme={customTheme}>
        <RadioButton name="test" />
      </Hercules>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
