import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, WorldMap } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <WorldMap color="graph-1" />
      </Box>
    </Hercules>
  );
};

storiesOf('WorldMap', module).add('Color', () => <Example />);
