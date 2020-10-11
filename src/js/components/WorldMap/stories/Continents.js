import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, WorldMap } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  const [active, setActive] = React.useState();
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <WorldMap
          continents={[
            {
              name: 'Africa',
              color: 'graph-1',
              onClick: () => setActive(!active),
            },
          ]}
        />
        {active && <Box margin="large">Africa</Box>}
      </Box>
    </Hercules>
  );
};

storiesOf('WorldMap', module).add('Continents', () => <Example />);
