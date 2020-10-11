import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Menu } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const ControlBottom = () => (
  <Hercules theme={microfocus}>
    <Box height="medium" justify="center" align="center" pad="large">
      <Menu
        dropProps={{ align: { bottom: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Profile', onClick: () => {} },
          { label: 'Settings', onClick: () => {} },
          { label: 'FAQ', onClick: () => {} },
        ]}
      />
    </Box>
  </Hercules>
);

storiesOf('Menu', module).add(
  'Bottom control button',
  () => <ControlBottom />,
  { chromatic: { disable: true } },
);
