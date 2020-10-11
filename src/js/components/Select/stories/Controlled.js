import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Select, Button } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleSelect = ({ theme, ...rest }) => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <Hercules full theme={theme || grommet}>
      <Box fill align="center" justify="start" pad="large" gap="small">
        <Button onClick={() => setOpen(!open)} label="Control the select" />
        <Select
          id="select"
          name="select"
          placeholder="Select"
          open={open}
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          {...rest}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Select', module).add('Controlled', () => <SimpleSelect />);
