import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar, Button, Box, microfocus, Hercules, Nav, Sidebar } from 'hercules-theme';

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  StatusInfoSmall,
} from 'grommet-icons';

const SidebarHeader = () => (
  <Avatar
    border={{ size: 'small', color: 'accent-2' }}
    background="white"
    flex={false}
  >
    SY
  </Avatar>
);

const SidebarFooter = () => (
  <Nav gap="small">
    <Button icon={<Chat />} />
    <Button icon={<Help />} />
  </Nav>
);

const MainNavigation = () => (
  <Nav gap="small">
    <Button icon={<StatusInfoSmall />} />
    <Button icon={<Projects />} />
    <Button icon={<Clock />} />
    <Box pad="small" border={{ color: 'white', side: 'bottom' }} />
    <Box gap="small" pad={{ vertical: 'medium' }}>
      <Button icon={<Analytics />} />
      <Button icon={<Configure />} />
    </Box>
  </Nav>
);

export const SidebarIcons = () => (
  <Hercules theme={microfocus} full>
    <Box direction="row" height={{ min: '100%' }}>
      <Sidebar
        background="accent-1"
        header={<SidebarHeader />}
        footer={<SidebarFooter />}
      >
        <MainNavigation />
      </Sidebar>
    </Box>
  </Hercules>
);

storiesOf('Sidebar', module).add('Icons', () => <SidebarIcons />);
