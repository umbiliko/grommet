import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Menu, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { FormDown } from 'grommet-icons';

const CustomMenu = () => (
  <Hercules theme={microfocus}>
    <Box
      align="center"
      pad="large"
      background={{ color: 'dark-2', opacity: 0.7 }}
    >
      <Menu
        plain
        items={[
          { label: 'Launch', onClick: () => {} },
          { label: 'Abort', onClick: () => {} },
        ]}
      >
        {({ drop, hover }) => {
          const color = hover && !drop ? 'accent-1' : undefined;
          return (
            <Box
              direction="row"
              gap="small"
              pad="small"
              background={hover && drop ? 'light-2' : undefined}
            >
              <Text color={color}>actions</Text>
              <FormDown color={color} />
            </Box>
          );
        }}
      </Menu>
    </Box>
  </Hercules>
);

storiesOf('Menu', module).add('Custom', () => <CustomMenu />, {
  chromatic: { disable: true },
});
