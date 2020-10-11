import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor, Box, Hercules, Main, Nav } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

const navItems = [
  { label: 'HTML', href: '#' },
  { label: 'JS', href: '#' },
  { label: 'CSS', href: '#' },
  { label: 'REACT', href: '#' },
];

const customTheme = deepMerge(microfocus, {
  anchor: {
    textDecoration: 'none',
    fontWeight: 500,
    color: {
      dark: 'white',
      light: 'neutral-2',
    },
    hover: {
      textDecoration: 'none',
      fontWeight: 700,
    },
  },
});

const CustomAnchor = () => (
  <Hercules full theme={customTheme}>
    <Box background="dark-1" pad="large" fill>
      <Box direction="row" pad={{ vertical: 'medium' }}>
        <Nav width="small" margin={{ right: 'large' }}>
          {navItems.map(item => (
            <Anchor href={item.href} label={item.label} key={item.label} />
          ))}
        </Nav>
        <Main>Place main content here</Main>
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Nav', module).add('Custom anchor', () => <CustomAnchor />);
