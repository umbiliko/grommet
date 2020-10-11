import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Grid } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const GridAreasAlternative = () => {
  return (
    <Hercules full theme={microfocus}>
      <Grid
        rows={['xxsmall', 'medium', 'xsmall']}
        columns={['1/4', '3/4']}
        areas={[
          ['header', 'header'],
          ['sidebar', 'main'],
          ['footer', 'footer'],
        ]}
        gap="small"
      >
        <Box background="brand" gridArea="header">
          Header
        </Box>

        <Box background="light-5" gridArea="sidebar">
          Sidebar
        </Box>

        <Box background="light-2" gridArea="main">
          Main
        </Box>

        <Box background="dark-2" gridArea="footer">
          Footer
        </Box>
      </Grid>
    </Hercules>
  );
};

storiesOf('Grid', module).add('Areas prop alternative', () => (
  <GridAreasAlternative />
));
