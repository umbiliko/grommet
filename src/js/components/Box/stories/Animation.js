import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Grid } from 'hercules-theme';
import { microfocus } from '../../../themes';

const Example = () => (
  <Hercules theme={microfocus}>
    <Box pad="medium">
      <Grid columns="small" gap="medium">
        {[
          'fadeIn',
          'fadeOut',
          'jiggle',
          'pulse',
          'rotateRight',
          'rotateLeft',
          'slideUp',
          'slideDown',
          'slideLeft',
          'slideRight',
          'zoomIn',
          'zoomOut',
        ].map(animation => (
          <Box
            key={animation}
            pad="large"
            background="brand"
            animation={{ type: animation, duration: 4000 }}
            align="center"
          >
            {animation}
          </Box>
        ))}
      </Grid>
    </Box>
  </Hercules>
);

storiesOf('Box', module).add('Animation', () => <Example />);
