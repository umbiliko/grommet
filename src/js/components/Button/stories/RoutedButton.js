import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, RoutedButton, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const RouteButton = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Text margin="medium" size="small">
        Note: RoutedButton will soon be deprecated
      </Text>
      <RoutedButton label="Go" path="/" />
    </Box>
  </Hercules>
);

storiesOf('Button', module).add('RoutedButton', () => <RouteButton />);
