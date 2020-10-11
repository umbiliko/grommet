import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Calendar, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  const [dates, setDates] = useState([]);

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Calendar
          dates={dates}
          onSelect={date => {
            const nextDates = [...dates];
            const index = nextDates.indexOf(date);
            if (index === -1) {
              nextDates.push(date);
            } else {
              nextDates.splice(index, 1);
            }
            setDates(nextDates);
            console.log('Select', date, nextDates);
          }}
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Calendar', module).add('Multiple', () => <Example />);
