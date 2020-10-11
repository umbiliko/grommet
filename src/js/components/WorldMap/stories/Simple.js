import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, WorldMap } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <WorldMap />
      </Box>
    </Hercules>
  );
};

// chromatic disabled because snapshot is the same as SelectPlace
storiesOf('WorldMap', module).add('Simple', () => <Example />, {
  chromatic: { disable: true },
});
