import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, CheckBoxGroup, Hercules, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Disabled = () => {
  return (
    <Hercules theme={microfocus}>
      <Box pad="medium" gap="large">
        <Box>
          <Text margin={{ vertical: 'small' }}>Disabled Group</Text>
          <CheckBoxGroup disabled options={['First', 'Second', 'Third']} />
        </Box>
        <Box>
          <Text margin={{ vertical: 'small' }}> Disabled Individuals</Text>
          <CheckBoxGroup
            options={[
              { label: 'Maui', disabled: true },
              { label: 'Jerusalem' },
              { label: 'Wuhan', disabled: true },
            ]}
          />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBoxGroup', module).add('Disabled', () => <Disabled />);
