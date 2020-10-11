import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Clock } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => (
  <Hercules theme={microfocus}>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" time="PT0H0M20S" run="backward" />
    </Box>
  </Hercules>
);

storiesOf('Clock', module).add('Countdown', () => <Example />, {
  chromatic: { disable: true },
});
