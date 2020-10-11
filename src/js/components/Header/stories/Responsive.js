import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Header, Anchor, Box, ResponsiveContext, Menu } from 'hercules-theme';
import { Hercules as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import { microfocus } from 'hercules-theme/themes';

const Responsive = () => (
  <Hercules theme={microfocus}>
    <Header background="light-4" pad="medium" height="xsmall">
      <Anchor
        href="https://tools.grommet.io/"
        icon={<GrommetIcon color="brand" />}
        label="Hercules Tools"
      />
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">Hercules.io</Box>,
                    href: 'https://v2.grommet.io/',
                  },
                  {
                    label: <Box pad="small">Feedback</Box>,
                    href: 'https://github.com/hercules/hercules-theme/issues',
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://v2.grommet.io/" label="Hercules.io" />
              <Anchor
                href="https://github.com/hercules/hercules-theme/issues"
                label="Feedback"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Hercules>
);

storiesOf('Header', module).add('Responsive', () => <Responsive />);
