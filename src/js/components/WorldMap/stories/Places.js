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
          places={[
            {
              name: 'Sydney',
              location: [-33.8830555556, 151.216666667],
              color: 'graph-1',
              onClick: () => setActive(!active),
            },
          ]}
        />
        {active && <Box margin="large">Sydney</Box>}
      </Box>
    </Hercules>
  );
};

storiesOf('WorldMap', module).add('Places', () => <Example />);
