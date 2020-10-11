import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hercules, Box, DataTable } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

// Source code for the data can be found here
// https://github.com/hercules/hercules-theme/blob/master/src/js/components/DataTable/stories/data.js
import { columns, data } from './data';

const pinnedColumns = columns.map(c => ({ ...c }));
pinnedColumns[0].pin = true;

const myTheme = deepMerge(microfocus, {
  table: {
    header: {
      background: {
        color: 'background',
      },
    },
    footer: {
      background: {
        color: 'background-back',
      },
    },
  },
  dataTable: {
    pinned: {
      header: {
        background: {
          color: 'brand',
          opacity: 'medium',
        },
        extend: `backdrop-filter: blur(8px);`,
      },
      footer: {
        background: { color: 'light-2' },
      },
    },
  },
});

const Example = () => (
  <Hercules theme={myTheme} full>
    <Box fill="vertical">
      <DataTable
        columns={pinnedColumns}
        data={data}
        step={10}
        fill
        pin
        background={{
          pinned: { color: 'orange' },
        }}
      />
    </Box>
  </Hercules>
);

storiesOf('DataTable', module).add('Fill and pin', () => <Example />);
