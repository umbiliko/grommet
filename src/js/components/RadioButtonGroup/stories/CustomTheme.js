import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, RadioButtonGroup, ThemeContext } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

const customTheme = deepMerge(microfocus, {
  radioButtonGroup: {
    container: {
      gap: 'xlarge',
    },
  },
  radioButton: {
    border: {
      color: 'red',
      width: '10px',
    },
    hover: {
      border: {
        color: 'blue',
      },
      background: {
        color: 'accent-4',
      },
    },
    size: '100px', // affects the size of the outer circle
    icon: {
      size: '20px', // affects the size of the inner circle
    },
    check: {
      radius: '20%',
    },
  },
});

const CustomRadioButtomGroup = ({ value: initialValue, ...props }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <Hercules theme={customTheme}>
      <ThemeContext.Consumer>
        {theme => console.log(JSON.stringify(theme.radioButton))}
      </ThemeContext.Consumer>
      <Box align="center" pad="large">
        <RadioButtonGroup
          name="radio"
          options={[
            { label: 'Choice 1', value: 'c1' },
            { label: 'Choice 2', value: 'c2' },
            { label: 'Choice 3', value: 'c3' },
          ]}
          value={value}
          onChange={event => setValue(event.target.value)}
          {...props}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('RadioButtonGroup', module).add('Custom theme', () => (
  <CustomRadioButtomGroup />
));
