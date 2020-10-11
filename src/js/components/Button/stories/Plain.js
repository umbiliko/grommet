import React from 'react';
import { storiesOf } from '@storybook/react';
import { Add } from 'grommet-icons';

import { Box, Button, Hercules, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const PlainButtons = props => (
  <Box pad="large" gap="large">
    {/* Out of the Box Button */}
    <Hercules theme={microfocus}>
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
          {/*  When Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Add</Text>
          </Box>
        </Button>
      </Box>
    </Hercules>
    {/* Kind Button */}
    <Hercules
      theme={{
        global: {
          font: {
            family: `-apple-system, BlinkMacSystemFont`,
          },
        },
        button: { default: {} }, // enabling kind button functionality
      }}
    >
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
          {/*  When kind Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Kind</Text>
          </Box>
        </Button>
      </Box>
    </Hercules>
  </Box>
);

storiesOf('Button', module)
  .add('Active', () => <PlainButtons active />)
  .add('Plain', () => <PlainButtons />);
