import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DataTable } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

// Source code for the data can be found here
// https://github.com/hercules/hercules-theme/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const ServedDataTable = () => {
  const [data2, setData2] = React.useState(DATA);

  const onSearch = search => {
    let nextData;
    if (search) {
      // The function below escapes regular expression special characters:
      // [ \ ^ $ . | ? * + ( )
      const escapedText = text => {
        text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
        return new RegExp(escapedText, 'i');
      };
      const expressions = Object.keys(search).map(property => ({
        property,
        // Create the regular expression with modified value which handles
        // escaping special characters. Without escaping special characters,
        // errors will appear in the console
        exp: new RegExp(escapedText(search[property]), 'i'),
      }));
      nextData = DATA.filter(
        d => !expressions.some(e => !e.exp.test(d[e.property])),
      );
    } else {
      nextData = DATA;
    }
    setData2(nextData);
  };

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <DataTable
          columns={columns.map(column => ({
            ...column,
            search:
              column.property === 'name' || column.property === 'location',
          }))}
          data={data2}
          onSearch={onSearch}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('DataTable', module).add('Served', () => <ServedDataTable />);
