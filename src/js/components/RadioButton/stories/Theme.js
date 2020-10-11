import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Button, RadioButton } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

const theme = deepMerge(microfocus, {
  radioButton: {
    gap: 'xsmall',
    size: '18px',
    hover: {
      border: {
        color: 'dark-3',
      },
    },
    check: {
      color: {
        light: 'neutral-1',
      },
      background: {
        color: 'red',
      },
    },
    icon: {
      size: '10px',
    },
    font: {
      weight: 500,
    },
  },
});

const ThemeRadioButton = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Hercules theme={theme}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        />

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </Hercules>
  );
};

storiesOf('RadioButton', module).add('Theme', () => <ThemeRadioButton />);
