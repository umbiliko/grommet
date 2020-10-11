import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, List } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const data = [];

for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
  });
}

const SelectionList = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large" gap="large">
        <List
          data={data.slice(0, 10)}
          itemProps={
            selected >= 0 ? { [selected]: { background: 'brand' } } : undefined
          }
          onClickItem={event =>
            setSelected(selected === event.index ? undefined : event.index)
          }
        />
      </Box>
    </Hercules>
  );
};

storiesOf('List', module).add('Selection', () => <SelectionList />);
