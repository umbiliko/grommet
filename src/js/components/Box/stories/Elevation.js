import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Text } from 'hercules-theme';
import { microfocus } from '../../../themes';

const ElevationBox = () => (
  <Hercules theme={microfocus}>
    <Box pad="small" align="start">
      <Box pad="medium" background="dark-1" elevation="medium" gap="medium">
        <Text>dark on white</Text>
        <Box pad="medium" elevation="medium" gap="medium">
          <Text>dark on dark</Text>
          <Box
            pad="medium"
            background="light-1"
            elevation="medium"
            gap="medium"
          >
            <Text>light on dark</Text>
            <Box pad="medium" elevation="medium">
              <Text>light on light</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Box', module).add('Elevation', () => <ElevationBox />);
