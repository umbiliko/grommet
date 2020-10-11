import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Chart } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const gradient = [
  { value: 0, color: 'status-ok' },
  { value: 25, color: 'status-ok' },
  { value: 27, color: 'status-warning' },
  { value: 30, color: 'status-critical' },
];

const GradientCharts = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large" gap="medium">
      <Chart
        id="bar"
        type="bar"
        color={gradient}
        values={[
          [10, 20],
          [20, 30],
          [30, 15],
        ]}
      />
      <Chart id="line" type="line" color={gradient} values={[20, 30, 15]} />
      <Chart
        id="area"
        type="area"
        color={gradient}
        values={[{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]}
      />
      <Chart
        id="point"
        type="point"
        color={gradient}
        values={[
          [10, 20],
          [20, 30],
          [30, 15],
        ]}
        round
      />
    </Box>
  </Hercules>
);

storiesOf('Chart', module).add('Gradient', () => <GradientCharts />);
