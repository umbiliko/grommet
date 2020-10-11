import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Chart, Heading } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const values = [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }];

const Example = () => (
  <Hercules theme={microfocus}>
    <Box direction="row-responsive" wrap pad="large">
      {['bar', 'line', 'area', 'point'].map(type => (
        <Box key={type} margin="medium">
          <Heading size="small" textAlign="center">
            {type}
          </Heading>
          <Chart type={type} values={values} round />
        </Box>
      ))}
    </Box>
  </Hercules>
);

storiesOf('Chart', module).add('Round', () => <Example />);
