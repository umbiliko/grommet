import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DataTable, CheckBox } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

// Source code for the data can be found here
// https://github.com/hercules/hercules-theme/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const controlledColumns = columns.map(col => ({ ...col }));
delete controlledColumns[0].footer;
delete controlledColumns[3].footer;
delete controlledColumns[4].footer;
delete controlledColumns[4].aggregate;

const ControlledDataTable = () => {
  const [checked, setChecked] = React.useState([]);

  const onCheck = (event, value) => {
    if (event.target.checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter(item => item !== value));
    }
  };

  const onCheckAll = event =>
    setChecked(event.target.checked ? DATA.map(datum => datum.name) : []);

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="medium">
        <DataTable
          columns={[
            {
              property: 'checkbox',
              render: datum => (
                <CheckBox
                  key={datum.name}
                  checked={checked.indexOf(datum.name) !== -1}
                  onChange={e => onCheck(e, datum.name)}
                />
              ),
              header: (
                <CheckBox
                  checked={checked.length === DATA.length}
                  indeterminate={
                    checked.length > 0 && checked.length < DATA.length
                  }
                  onChange={onCheckAll}
                />
              ),
              sortable: false,
            },
            ...controlledColumns,
          ].map(col => ({ ...col }))}
          data={DATA}
          sortable
          size="medium"
        />
      </Box>
    </Hercules>
  );
};

storiesOf('DataTable', module).add('Controlled', () => <ControlledDataTable />);
