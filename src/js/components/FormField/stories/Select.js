import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus, Box, FormField, Select, Hercules } from 'hercules-theme';

const allOptions = Array(100)
  .fill()
  .map((_, i) => `option ${i + 1}`);

const FormFieldSelect = props => {
  const [value, setValue] = useState('');

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <FormField label="Label" htmlFor="select" {...props}>
          <Select
            id="select"
            placeholder="placeholder"
            options={allOptions}
            value={value}
            onChange={({ option }) => setValue(option)}
          />
        </FormField>
      </Box>
    </Hercules>
  );
};

storiesOf('FormField', module).add('Select', () => <FormFieldSelect />);
