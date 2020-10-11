import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DropButton, Text } from 'hercules-theme';
import { Gremlin } from 'grommet-icons';
import { microfocus } from 'hercules-theme/themes';

const renderItems = () => (
  <Box>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
  </Box>
);

const MenuItem = () => (
  <Box height="36px" width="36px" align="center">
    <Gremlin />
  </Box>
);

const GremlinDropButton = () => (
  <DropButton
    alignSelf="center"
    margin={{ vertical: 'small' }}
    dropContent={renderItems()}
    dropProps={{ align: { top: 'bottom' } }}
  >
    <MenuItem />
  </DropButton>
);
const MenuDropButton = () => {
  return (
    <Hercules theme={microfocus} full>
      <Box fill>
        <Box fill="vertical" width="xxsmall" background="dark-2">
          <GremlinDropButton />
          <Box flex />
          <GremlinDropButton />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('DropButton', module).add('Menu', () => <MenuDropButton />, {
  chromatic: { disable: true },
});
