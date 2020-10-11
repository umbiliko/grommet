import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, List, Menu } from 'hercules-theme';
import { More } from 'grommet-icons';
import { microfocus } from 'hercules-theme/themes';

const data = [];

for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
  });
}

const ActionList = () => (
  <Hercules theme={microfocus}>
    <Box pad="large">
      <List
        data={data.slice(0, 10)}
        pad={{ left: 'small', right: 'none' }}
        action={(item, index) => {
          return (
            <Menu
              key={index}
              icon={<More />}
              hoverIndicator
              items={[{ label: 'one' }]}
            />
          );
        }}
      />
    </Box>
  </Hercules>
);

storiesOf('List', module).add('Action', () => <ActionList />);
