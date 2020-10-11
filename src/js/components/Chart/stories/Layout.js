import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Chart, Heading } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const type = 'bar';
let value = 10;
const values = Array(14)
  .fill(0)
  .map((_, index) => {
    const delta = index * 3;
    value += delta % 2 ? delta : -delta;
    return [index, value];
  });

const LayoutChart = () => (
  <Hercules theme={microfocus}>
    <Box margin="medium">
      <Heading level={2}>full</Heading>
      <Box pad="medium" border>
        <Chart type={type} values={values} size={{ width: 'full' }} round />
      </Box>

      <Heading level={2}>auto, gap</Heading>
      <Box pad="medium" border>
        <Chart
          type={type}
          values={values}
          size={{ width: 'auto' }}
          gap="small"
          round
        />
      </Box>

      <Heading level={2}>default</Heading>
      <Box pad="medium" border>
        <Chart type={type} values={values} round />
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Chart', module).add('Layout', () => <LayoutChart />);
