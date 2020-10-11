import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules } from 'hercules-theme';
import { microfocus } from '../../../themes';

const RTLBox = () => (
  <Hercules theme={microfocus} dir="rtl">
    <Box direction="row" align="center" pad="small" gap="small" border>
      <Box direction="row" align="center" pad="small" border="start">
        border start
      </Box>
      <Box
        direction="row"
        align="center"
        pad={{ start: 'large' }}
        background="brand"
      >
        pad start
      </Box>
      <Box
        direction="row"
        align="center"
        margin={{ start: 'large' }}
        background="brand"
      >
        margin start
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Box', module).add('RTL', () => <RTLBox />);
