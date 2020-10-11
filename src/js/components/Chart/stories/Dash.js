import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Chart } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large" gap="large">
      <Chart type="line" dash values={[20, 30, 15]} />
      <Chart type="line" dash round values={[20, 30, 15]} />
      <Chart type="line" dash thickness="xsmall" values={[20, 30, 15]} />
      <Chart type="line" dash round thickness="xsmall" values={[20, 30, 15]} />

      <Chart
        type="bar"
        dash
        values={[
          [10, 20],
          [20, 30],
          [30, 15],
        ]}
      />
    </Box>
  </Hercules>
);

storiesOf('Chart', module).add('Dash', () => <Example />);
