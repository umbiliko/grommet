import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { FormDown } from 'grommet-icons';
import isChromatic from 'chromatic/isChromatic';

import { Hercules, Box, Calendar, DropButton, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const CalendarDropButton = () => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);

  const onSelect = selectedDate => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <DropButton
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          dropContent={<Calendar date={date} onSelect={onSelect} />}
        >
          <Box direction="row" gap="medium" align="center" pad="small">
            <Text>
              {date ? new Date(date).toLocaleDateString() : 'Select date'}
            </Text>
            <FormDown color="brand" />
          </Box>
        </DropButton>
      </Box>
    </Hercules>
  );
};

if (!isChromatic()) {
  storiesOf('DropButton', module).add('Calendar', () => <CalendarDropButton />);
}
