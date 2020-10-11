import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const sizes = [
  'xxlarge',
  'xlarge',
  'large',
  'medium',
  'small',
  'xsmall',
  '77px',
];

const All = () => (
  <Hercules theme={microfocus}>
    {sizes.map(size => (
      <Box key={size} margin="small">
        <Text size={size}>{`Text ${size}`}</Text>
      </Box>
    ))}
  </Hercules>
);

storiesOf('Text', module).add('All', () => <All />);
