import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor, Hercules, Nav } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const items = [
  { label: 'Item A', href: '#' },
  { label: 'Item B', href: '#' },
  { label: 'Item C', href: '#' },
  { label: 'Item D', href: '#' },
];

const Simple = () => (
  <Hercules theme={microfocus}>
    <Nav pad="large">
      {items.map(item => (
        <Anchor href={item.href} label={item.label} key={item.label} />
      ))}
    </Nav>
  </Hercules>
);

storiesOf('Nav', module).add('Simple', () => <Simple />);
