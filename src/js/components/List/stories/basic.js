import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, List } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

const BasicList = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </Hercules>
);

storiesOf('List', module).add('Basic', () => <BasicList />);
