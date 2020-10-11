import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DataTable } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

// Source code for the data can be found here
// https://github.com/hercules/hercules-theme/blob/master/src/js/components/DataTable/stories/data.js
import { columns, data } from './data';

const SizedDataTable = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={data} size="medium" />
    </Box>
  </Hercules>
);

storiesOf('DataTable', module).add('Sized', () => <SizedDataTable />);
