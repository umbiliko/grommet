import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Menu, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { FormDown, Github, Slack } from 'grommet-icons';

// This story offers a suggested workaround for issue #3209.

const IconItemsMenu = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Menu
        plain
        open
        items={[
          {
            label: <Box alignSelf="center">Github</Box>,
            onClick: () => {},
            icon: (
              <Box pad="medium">
                <Github size="large" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">Slack</Box>,
            onClick: () => {},
            icon: (
              <Box pad="medium">
                <Slack size="large" />
              </Box>
            ),
          },
        ]}
      >
        <Box direction="row" gap="small" pad="large">
          <FormDown />
          <Text>Menu with Icon on the left</Text>
        </Box>
      </Menu>
    </Box>
  </Hercules>
);

storiesOf('Menu', module).add('Item with icon', () => <IconItemsMenu />);
