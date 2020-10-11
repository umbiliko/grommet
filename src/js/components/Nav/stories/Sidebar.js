import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus, Box, Button, Hercules, Nav, Text } from 'hercules-theme';

const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        background={hover ? 'accent-1' : undefined}
        pad={{ horizontal: 'large', vertical: 'medium' }}
      >
        <Text size="large">{label}</Text>
      </Box>
    )}
  </Button>
);

const SidebarNav = () => {
  const [active, setActive] = useState();
  return (
    <Hercules full theme={microfocus}>
      <Box fill direction="row">
        <Nav background="neutral-1">
          {['Dashboard', 'Devices', 'Settings'].map(label => (
            <SidebarButton
              key={label}
              label={label}
              active={label === active}
              onClick={() => setActive(label)}
            />
          ))}
        </Nav>
      </Box>
    </Hercules>
  );
};

storiesOf('Nav', module).add('Sidebar', () => <SidebarNav />);
