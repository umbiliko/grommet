import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Footer, microfocus, Hercules, Main, Text } from 'hercules-theme';

const Simple = () => (
  <Hercules theme={microfocus}>
    <Main background="light-2" elevation="large" pad="large" gap="large">
      <Text margin="small" size="xsmall">
        Main Content
      </Text>
      <Box flex />
    </Main>
    <Footer background="light-4" justify="center" pad="small">
      <Text textAlign="center" size="small">
        © 2019 Copyright Hercules
      </Text>
    </Footer>
  </Hercules>
);

storiesOf('Footer', module).add('Simple', () => <Simple />);
