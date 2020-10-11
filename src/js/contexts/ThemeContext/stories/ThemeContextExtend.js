import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';
import { Box, Text, ThemeContext, Hercules, Select } from 'hercules-theme';

const customTheme = deepMerge(microfocus, {
  global: {
    focus: {
      border: {
        color: 'red',
      },
      shadow: {
        color: 'red',
      },
    },
  },
});

const GlobalThemeWithThemeContext = () => {
  const options = ['one', 'two', 'three'];
  const [valueRed, setValueRed] = useState('');
  const [valueBlue, setValueBlue] = useState('');

  return (
    <Hercules theme={customTheme}>
      <Box align="center" pad="large" direction="column" gap="large">
        <Box>
          <Text margin="medium">
            The focus color of this select component is being altered by the
            custom theme that is passed into the HerculesTheme component.
          </Text>
          <Select
            alignSelf="center"
            placeholder="Select"
            value={valueRed}
            options={options}
            onChange={({ option }) => setValueRed(option)}
          />
        </Box>
        <Box>
          <ThemeContext.Extend
            value={{
              global: {
                focus: {
                  border: {
                    color: 'blue',
                  },
                },
              },
            }}
          >
            <Text margin="medium">
              The focus color of this select component is being altered by
              ThemeContext, independent from the custom theme
            </Text>
            <Select
              alignSelf="center"
              placeholder="Select"
              value={valueBlue}
              options={options}
              onChange={({ option }) => setValueBlue(option)}
            />
          </ThemeContext.Extend>
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('Theme', module).add('ThemeContext.Extend', () => (
  <GlobalThemeWithThemeContext />
));
