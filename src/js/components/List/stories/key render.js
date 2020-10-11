import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, List, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

const data = [];
for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
    location: locations[i % locations.length],
  });
}

const RenderedList = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <List
        data={data.slice(0, 10)}
        primaryKey={item => (
          <Text size="large" weight="bold">
            {item.entry}
          </Text>
        )}
        secondaryKey={item => (
          <Text size="small" color="dark-4">
            {item.location}
          </Text>
        )}
      />
    </Box>
  </Hercules>
);

storiesOf('List', module).add('Key render', () => <RenderedList />);
