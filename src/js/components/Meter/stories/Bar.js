import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Meter } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const BarMeter = () => {
  const value = 30;

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Meter type="bar" background="light-2" values={[{ value }]} />
      </Box>
    </Hercules>
  );
};

storiesOf('Meter', module).add('Bar', () => <BarMeter />);
