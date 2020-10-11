import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, RadioButton } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const DisabledRadioButton = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked
          disabled
        />
      </Box>
    </Hercules>
  );
};

storiesOf('RadioButton', module).add('Disabled', () => <DisabledRadioButton />);
