import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Layer } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const MarginLayer = ({ margin, ...rest }) => (
  <Hercules theme={microfocus}>
    <Layer
      margin={
        margin || { left: '40px', top: '50px', right: '30px', bottom: '10px' }
      }
      {...rest}
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

storiesOf('Layer', module)
  .add('Margin', () => <MarginLayer full />)
  .add('Margin (center)', () => <MarginLayer margin="large" />)
  .add('Margin top (center)', () => (
    <MarginLayer margin={{ top: 'large' }} position="top" />
  ));
