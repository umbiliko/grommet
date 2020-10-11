import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Color = () => (
  <Hercules theme={microfocus}>
    <Text color="accent-1">Colored Text</Text>
  </Hercules>
);

storiesOf('Text', module).add('Color', () => <Color />);
