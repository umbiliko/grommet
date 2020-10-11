import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { microfocus, Box, Hercules, Select } from 'hercules-theme';

const objectOptions = [
  {
    label: 'Male',
    value: 1,
  },
  {
    label: 'Female',
    value: 2,
  },
  {
    label: 'Non Binary',
    value: 3,
  },
  {
    label: 'Other',
    value: 4,
  },
];

const Example = () => {
  const [value, setValue] = useState('');

  return (
    <Hercules theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          labelKey="label"
          valueKey={{ key: 'value', reduce: true }}
          value={value}
          options={objectOptions}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Select', module).add('Object options', () => <Example />, {
  chromatic: { disable: true },
});
