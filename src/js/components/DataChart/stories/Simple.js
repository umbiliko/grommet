import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DataChart, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const data = [];
for (let i = 1; i < 8; i += 1) {
  const v = Math.sin(i / 2.0);
  data.push({
    date: `2020-07-${((i % 30) + 1).toString().padStart(2, 0)}`,
    percent: Math.abs(v * 100),
  });
}

const Example = () => (
  <Hercules theme={microfocus}>
    <Box align="center" justify="start" pad="large">
      <DataChart data={data} series="percent" />
    </Box>
  </Hercules>
);

storiesOf('DataChart', module).add('Simple', () => <Example />);
