import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Anchor,
  Box,
  Hercules,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
} from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const CollapsableNav = () => (
  <Hercules theme={microfocus}>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        Resize the page to collapse the Nav into a Menu
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Click me"
              items={[
                { label: 'This is', onClick: () => {} },
                { label: 'The Menu', onClick: () => {} },
                { label: 'Component', onClick: () => {} },
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="#" label="This is" />
              <Anchor href="#" label="The Nav" />
              <Anchor href="#" label="Component" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Hercules>
);

storiesOf('Nav', module).add('Collapsable nav', () => <CollapsableNav />);
