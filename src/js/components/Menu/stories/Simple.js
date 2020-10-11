import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Menu } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleMenu = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Menu
        dropProps={{
          align: { top: 'bottom', left: 'left' },
          elevation: 'xlarge',
        }}
        label="actions"
        items={[
          { label: 'Launch', onClick: () => {} },
          { label: 'Abort', onClick: () => {} },
          { label: 'Disabled', disabled: true },
        ]}
      />
    </Box>
  </Hercules>
);

storiesOf('Menu', module).add('Simple', () => <SimpleMenu />, {
  chromatic: { disable: true },
});
