import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { deepMerge } from 'hercules-theme/utils';

import { Box, Calendar, Hercules, microfocus } from 'hercules-theme';

const customHeading = deepMerge(microfocus, {
  calendar: {
    heading: {
      level: '3',
    },
  },
});

const CustomSizeCalendar = () => {
  const [date, setDate] = useState();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <Hercules theme={customHeading}>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          onSelect={onSelect}
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Calendar', module).add('Heading size', () => <CustomSizeCalendar />);
