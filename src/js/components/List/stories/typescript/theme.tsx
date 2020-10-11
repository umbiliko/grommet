import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, List } from 'hercules-theme';
import { microfocus, ThemeType } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

export const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

// Type annotations can only be used in TypeScript files.
// Remove ': ThemeType' if you are not using Typescript.
const theme: ThemeType = deepMerge(microfocus, {
  list: {
    item: {
      pad: { horizontal: 'large', vertical: 'xsmall' },
      background: ['white', 'light-2'],
      border: true,
    },
  },
});

const ThemedList = () => (
  <Hercules theme={theme}>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </Hercules>
);

storiesOf('List', module).add('Themed', () => <ThemedList />);
