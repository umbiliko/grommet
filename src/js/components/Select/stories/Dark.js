import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Select } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const DarkSelect = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <Hercules full theme={microfocus}>
      <Box fill background="dark-1" align="center" justify="center">
        <Select
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Select', module).add('Dark', () => <DarkSelect />);
