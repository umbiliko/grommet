import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DataTable } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

// Source code for the data can be found here
// https://github.com/hercules/hercules-theme/blob/master/src/js/components/DataTable/stories/data.js
import { DATA } from './data';

const columns = [
  { property: 'name', header: 'Name' },
  { property: 'location', header: 'Location' },
];

const Example = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={DATA} step={10} primaryKey={false} />
    </Box>
  </Hercules>
);

storiesOf('DataTable', module).add('No primary', () => <Example />);
