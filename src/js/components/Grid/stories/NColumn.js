import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Grid } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const NColumnGrid = () => (
  <Hercules theme={microfocus} full>
    <Grid
      columns={{
        count: 6,
        size: 'auto',
      }}
      gap="small"
    >
      <Box background="brand">Item 1</Box>
      <Box background="brand">Item 2</Box>
      <Box background="brand">Item 3</Box>
      <Box background="brand">Item 4</Box>
      <Box background="brand">Item 5</Box>
      <Box background="brand">Item 6</Box>
    </Grid>
  </Hercules>
);

storiesOf('Grid', module).add('N-column layout', () => <NColumnGrid />);
