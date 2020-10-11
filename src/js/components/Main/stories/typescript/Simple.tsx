import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Header, Main, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Simple = () => (
  <Hercules theme={microfocus}>
    <Header background="light-4" pad="small">
      <Text size="small">Header</Text>
    </Header>
    <Main pad="small">
      I am Main! Main is a good place to place your content.
    </Main>
  </Hercules>
);

storiesOf('Main', module).add('Simple', () => <Simple />);
