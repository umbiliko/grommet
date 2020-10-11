import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button, Collapsible, Hercules, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleCollapsible = props => {
  const [open, setOpen] = React.useState(false);

  return (
    <Hercules theme={microfocus}>
      <Box align="start" gap="small">
        <Button primary onClick={() => setOpen(!open)} label="Toggle" />
        <Collapsible open={open} {...props}>
          <Box
            background="light-2"
            round="medium"
            pad="medium"
            align="center"
            justify="center"
          >
            <Text>This is a box inside a Collapsible component</Text>
          </Box>
        </Collapsible>
        <Text>This is other content outside the Collapsible box</Text>
      </Box>
    </Hercules>
  );
};

storiesOf('Collapsible', module).add('Default', () => <SimpleCollapsible />, {
  chromatic: { disable: true },
});
