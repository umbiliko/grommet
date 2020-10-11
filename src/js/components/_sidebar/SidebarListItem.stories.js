import { storiesOf } from '@storybook/react';
import React from 'react';

import SidebarListItem from './Sidebar';

storiesOf('MicroFocus/SidebarListItem', module)
  
  .add('Regular Sidebar List Item', () => (<SidebarListItem />));
