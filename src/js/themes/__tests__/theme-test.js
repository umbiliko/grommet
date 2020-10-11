import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { hpe } from 'hercules-theme-theme-hpe';
import { Add } from 'grommet-icons';

import { Hercules, Anchor, Box, Text, TextInput } from '../../components';
import { dark } from '..';

// hpe theme has deprecated the accent and neutral colors
const hpeColors = [
  'brand',
  'background-contrast',
  'background-front',
  'control',
  'graph-0',
  'graph-1',
  'graph-2',
  'graph-3',
  'graph-4',
  'focus',
  'status-critical',
  'status-disabled',
  'status-ok',
  'status-unknown',
  'status-warning',
  'text',
];

const colors = [
  'accent-1',
  'accent-2',
  'accent-3',
  'brand',
  'dark-1',
  'dark-2',
  'dark-3',
  'dark-4',
  'dark-5',
  'dark-6',
  'focus',
  'light-1',
  'light-2',
  'light-3',
  'light-4',
  'light-5',
  'light-6',
  'neutral-1',
  'neutral-2',
  'neutral-3',
  'status-critical',
  'status-disabled',
  'status-ok',
  'status-unknown',
  'status-warning',
];

const customTheme = {
  global: {
    input: {
      // test backwards compatibility that string value works for input pad
      padding: '12px',
      font: {
        height: '50px',
        size: 'large',
        weight: 'bold',
      },
    },
    colors: {
      custom: '#cc6633',
      placeholder: 'custom',
    },
  },
};

describe('Hercules', () => {
  test('default theme', () => {
    const component = renderer.create(
      <Hercules>
        {colors.map(color => (
          <Box key={color} background={color}>
            <Text>{color}</Text>
          </Box>
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('dark theme', () => {
    const component = renderer.create(
      <Hercules theme={dark}>
        {colors.map(color => (
          <Box key={color} background={color}>
            <Text>{color}</Text>
          </Box>
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('hpe theme', () => {
    const component = renderer.create(
      <Hercules theme={hpe}>
        {hpeColors.map(color => (
          <Box key={color} background={color}>
            <Text>{color}</Text>
          </Box>
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom theme', () => {
    const component = renderer.create(
      <Hercules theme={customTheme}>
        <Box>
          <Anchor icon={<Add />} label="Add" />
          <Anchor icon={<Add />} label="Add" color="custom" />
        </Box>
        <Box background="dark-1">
          <Anchor icon={<Add />} label="Add" />
          <Anchor icon={<Add />} label="Add" color="custom" />
        </Box>
        <Box>
          <TextInput value="Value" placeholder="Placeholder" />
        </Box>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
