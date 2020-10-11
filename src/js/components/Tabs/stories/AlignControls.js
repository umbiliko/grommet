import React from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Box, Hercules, microfocus, Tab, Tabs } from 'hercules-theme';
import { deepMerge } from 'hercules-theme/utils';

const myTheme = deepMerge(microfocus, {
  tabs: {
    header: {
      border: {
        side: 'bottom',
        color: 'blue',
        size: 'small',
      },
    },
  },
  tab: {
    border: {
      side: 'bottom',
      color: 'dark-4',
    },
    pad: 'small',
    margin: {
      // bring the overall tabs border behind invidual tab borders
      vertical: '-2px',
      horizontal: 'none',
    },
  },
});

const AlignControls = () => (
  <Hercules theme={myTheme} full>
    <Tabs justify="start" alignControls="start">
      <Tab title="Tab 1">
        <Box fill pad="large" align="center">
          <Attraction size="xlarge" />
        </Box>
      </Tab>
      <Tab title="Tab 2">
        <Box fill pad="large" align="center">
          <TreeOption size="xlarge" />
        </Box>
      </Tab>
      <Tab title="Tab 3">
        <Box fill pad="large" align="center">
          <Car size="xlarge" />
        </Box>
      </Tab>
    </Tabs>
  </Hercules>
);

storiesOf('Tabs', module).add('Align controls', () => <AlignControls />);
