import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, TextInput } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            onChange={event => console.log('Change', event.target.value)}
          />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('TextInput', module).add('Uncontrolled', () => <Example />, {
  chromatic: { disable: true },
});
