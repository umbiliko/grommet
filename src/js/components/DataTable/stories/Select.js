import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DataTable } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

// Source code for the data can be found here
// https://github.com/hercules/hercules-theme/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const Example = () => {
  const [select, setSelect] = React.useState([]);
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <DataTable
          columns={columns}
          data={DATA}
          step={10}
          select={select}
          onSelect={setSelect}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('DataTable', module).add('Select', () => <Example />);
