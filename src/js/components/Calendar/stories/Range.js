import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Calendar, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const RangeCalendar = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Calendar dates={[['2020-04-03', '2020-04-08']]} range />
    </Box>
  </Hercules>
);

storiesOf('Calendar', module).add('Range', () => <RangeCalendar />);
