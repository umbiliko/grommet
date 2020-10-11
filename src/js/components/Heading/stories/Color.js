import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hercules, Heading } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Color = () => (
  <Hercules theme={microfocus}>
    <Heading color="accent-1">Colored Heading</Heading>
  </Hercules>
);

storiesOf('Heading', module).add('Color', () => <Color />);
