import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Calendar, Hercules } from 'hercules-theme';

import { microfocus } from 'hercules-theme/themes';

const FillCalendar = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="center">
        <Box height="large" width="large" border>
          <Calendar fill daysOfWeek />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('Calendar', module).add('Fill', () => <FillCalendar />);
