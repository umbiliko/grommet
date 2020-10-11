import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Clock } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const AnalogClock = () => (
  <Hercules theme={microfocus}>
    <Box align="center" justify="start" pad="large">
      <Clock type="analog" />
    </Box>
  </Hercules>
);

storiesOf('Clock', module).add('Analog', () => <AnalogClock />, {
  chromatic: { disable: true },
});
