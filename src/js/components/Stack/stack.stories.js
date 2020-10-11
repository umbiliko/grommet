import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Stack } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleStack = () => (
  <Hercules>
    <Stack anchor="center">
      <Box pad="large" background="neutral-1" />
      <Box pad="small" background="accent-1" />
    </Stack>
  </Hercules>
);

const FillStack = () => (
  <Hercules theme={microfocus} full>
    <Stack fill>
      <Box background="brand" fill>
        Test
      </Box>
    </Stack>
  </Hercules>
);

storiesOf('Stack', module)
  .add('Simple', () => <SimpleStack />)
  .add('Fill', () => <FillStack />);
