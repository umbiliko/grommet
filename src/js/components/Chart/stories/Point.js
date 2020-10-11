import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Chart, Heading } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const values = [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }];

const Example = () => (
  <Hercules theme={microfocus}>
    <Box direction="row-responsive" wrap pad="large">
      {['circle', 'square', 'diamond', 'star', 'triangle', 'triangleDown'].map(
        point => (
          <Box key={point} margin="medium">
            <Heading size="small" textAlign="center">
              {point}
            </Heading>
            <Chart type="point" values={values} point={point} />
          </Box>
        ),
      )}
    </Box>
  </Hercules>
);

storiesOf('Chart', module).add('Point', () => <Example />);
