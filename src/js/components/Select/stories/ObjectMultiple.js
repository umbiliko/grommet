import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Select } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const objectOptions = [];
for (let i = 1; i <= 200; i += 1) {
  objectOptions.push({
    lab: `option ${i}`,
    val: i,
    dis: i % 5 === 0,
  });
}

const Example = () => {
  const [options, setOptions] = useState(objectOptions);
  const [value, setValue] = useState([1, 2]);

  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          size="medium"
          placeholder="Select"
          multiple
          closeOnChange={false}
          disabledKey="dis"
          labelKey="lab"
          valueKey={{ key: 'val', reduce: true }}
          value={value}
          options={options}
          onChange={({ value: nextValue }) => setValue(nextValue)}
          onClose={() => setOptions(objectOptions)}
          onSearch={text => {
            // The line below escapes regular expression special characters:
            // [ \ ^ $ . | ? * + ( )
            const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

            // Create the regular expression with modified value which
            // handles escaping special characters. Without escaping special
            // characters, errors will appear in the console
            const exp = new RegExp(escapedText, 'i');
            setOptions(objectOptions.filter(o => exp.test(o.lab)));
          }}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Select', module).add('Object multiple', () => <Example />);
