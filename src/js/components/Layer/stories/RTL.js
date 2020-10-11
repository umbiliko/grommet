import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Layer } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const RTLLayer = () => (
  <Hercules theme={microfocus} dir="rtl">
    <Layer
      position="start"
      margin={{ vertical: 'small', start: 'xlarge', end: 'medium' }}
    >
      <Box height="small" overflow="auto">
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
      </Box>
    </Layer>
  </Hercules>
);

storiesOf('Layer', module).add('RTL', () => <RTLLayer />);
