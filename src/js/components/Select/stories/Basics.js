import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Select, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleSelect = ({ ...rest }) => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large" gap="medium">
        <Text weight="bold">Enabled</Text>
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          {...rest}
        />
        <Text weight="bold">Disabled</Text>
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          disabled
          {...rest}
        />
      </Box>
    </Hercules>
  );
};

const defaultOptions = [];
const objectOptions = [];
for (let i = 1; i <= 200; i += 1) {
  defaultOptions.push(`option ${i}`);
  objectOptions.push({
    lab: `option ${i}`,
    val: i,
    dis: i % 5 === 0,
    sel: i % 13 === 0,
  });
}

storiesOf('Select', module).add('Simple', () => <SimpleSelect />);
