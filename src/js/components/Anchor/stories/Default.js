import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor, Box, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Default = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Anchor href="#">Link</Anchor>
      </Box>
    </Hercules>
  );
};

storiesOf('Anchor', module).add('Default', () => <Default />, {
  chromatic: { disable: true },
});
