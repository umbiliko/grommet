import React from 'react';
import { storiesOf } from '@storybook/react';

import { Calendar, Box, Text, Hercules } from 'hercules-theme';
import { Plan } from 'grommet-icons';
import { ThemeType } from 'hercules-theme/themes';

// Remove ': ThemeType' if you are not using Typescript.
const customTheme: ThemeType = {
  global: {
    font: {
      family: `-apple-system,
       BlinkMacSystemFont, 
       "Segoe UI"`,
    },
  },
  calendar: {
    day: {
      extend: ({ isSelected }) => `
        border-radius: 100px;
        background-color: ${isSelected ? 'white' : undefined}`,
    },
  },
};

export const Example = () => (
  <Hercules theme={customTheme} themeMode="dark">
    <Box align="center" background="dark-1" gap="small">
      <Box
        direction="row"
        justify="center"
        align="center"
        gap="small"
        pad="small"
      >
        <Plan size="medium" />
        <Text size="xlarge" margin="none">
          Calendar
        </Text>
      </Box>
      <Calendar
        // date={new Date().toISOString()}
        date="2020-07-28T06:00:01.409Z"
        daysOfWeek
        firstDayOfWeek={1}
      />
    </Box>
  </Hercules>
);

storiesOf('Calendar', module).add('Custom date', () => <Example />);
