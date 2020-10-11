import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Layer, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const PlainLayer = () => (
  <Hercules theme={microfocus} full>
    <Box fill background="dark-3">
      <Layer margin="medium" plain>
        <Box pad="large" border={{ color: 'accent-1', size: 'large' }}>
          <Text color="accent-2">Text</Text>
        </Box>
      </Layer>
    </Box>
  </Hercules>
);

storiesOf('Layer', module).add('Plain', () => <PlainLayer />);
