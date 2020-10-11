import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button, Calendar, Hercules, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

import { FormPreviousLink, FormNextLink } from 'grommet-icons';

const CustomHeaderCalendar = () => {
  const [date, setDate] = useState();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          onSelect={onSelect}
          size="small"
          bounds={['2018-09-08', '2018-12-13']}
          header={({
            date: currentDate,
            locale,
            onPreviousMonth,
            onNextMonth,
            previousInBound,
            nextInBound,
          }) => (
            <Box direction="row" align="center" justify="between">
              <Button disabled={!previousInBound} onClick={onPreviousMonth}>
                <Box>
                  <FormPreviousLink />
                </Box>
              </Button>
              <Text size="small">
                <strong>
                  {currentDate.toLocaleDateString(locale, {
                    month: 'long',
                    year: 'numeric',
                  })}
                </strong>
              </Text>
              <Button disabled={!nextInBound} onClick={onNextMonth}>
                <Box>
                  <FormNextLink />
                </Box>
              </Button>
            </Box>
          )}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Calendar', module).add('Header', () => <CustomHeaderCalendar />);
