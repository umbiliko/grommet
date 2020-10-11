import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Menu } from 'hercules-theme';
import { Power, User } from 'grommet-icons';
import { microfocus } from 'hercules-theme/themes';

const Reverse = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Menu
        dropProps={{ align: { top: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Home' },
          { label: 'Profile', icon: <User />, gap: 'small' },
          { label: 'Logout', icon: <Power />, reverse: true, gap: 'small' },
        ]}
      />
    </Box>
  </Hercules>
);

storiesOf('Menu', module).add('Reverse', () => <Reverse />, {
  chromatic: { disable: true },
});
