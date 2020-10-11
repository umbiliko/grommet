import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Grid } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Percentages = () => (
  <Hercules theme={microfocus} full>
    <Grid
      fill
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      columns={['small', 'flex']}
      rows={['flex']}
      gap="small"
    >
      <Box gridArea="nav" background="brand" />
      <Box gridArea="main" background="brand" />
    </Grid>
  </Hercules>
);

storiesOf('Grid', module).add('Percentages', () => <Percentages />);
