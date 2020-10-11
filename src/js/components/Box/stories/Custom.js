import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Text } from 'hercules-theme';
import { microfocus } from '../../../themes';

const GradientColorBox = () => (
  <Hercules theme={microfocus}>
    <Box
      justify="center"
      align="center"
      pad="xlarge"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      round="large"
    >
      <Text color="white">I have a linear gradient background</Text>
    </Box>
  </Hercules>
);

storiesOf('Box', module).add('Gradient', () => <GradientColorBox />);
