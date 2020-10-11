import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Clock } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const DigitalClock = () => (
  <Hercules theme={microfocus}>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" />
    </Box>
  </Hercules>
);

storiesOf('Clock', module).add('Digital', () => <DigitalClock />, {
  chromatic: { disable: true },
});
