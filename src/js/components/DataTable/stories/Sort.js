import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DataTable } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

// Source code for the data can be found here
// https://github.com/hercules/hercules-theme/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const Example = () => {
  const [sort, setSort] = React.useState({
    property: 'name',
    direction: 'desc',
  });
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <DataTable
          columns={columns.map(c => ({
            ...c,
            search: c.property === 'name' || c.property === 'location',
          }))}
          data={DATA}
          sort={sort}
          onSort={setSort}
          resizeable
        />
      </Box>
    </Hercules>
  );
};

storiesOf('DataTable', module).add('Sort', () => <Example />);
