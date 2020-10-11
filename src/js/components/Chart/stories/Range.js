import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Chart, Heading } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const values = [
  [10, 20, 30],
  [20, 30, 60],
  [30, 15, 20],
];

const Example = () => (
  <Hercules theme={microfocus}>
    <Box direction="row-responsive" wrap pad="large">
      {['bar', 'line', 'area', 'point'].map(type => (
        <Box key={type} margin="medium">
          <Heading size="small" textAlign="center">
            {type}
          </Heading>
          <Chart type={type} values={values} thickness="small" />
        </Box>
      ))}
    </Box>
  </Hercules>
);

storiesOf('Chart', module).add('Range', () => <Example />);
