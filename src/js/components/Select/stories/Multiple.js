import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Select } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const options = ['one', 'two'];

const Example = () => {
  const [value, setValue] = useState(['one']);

  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          placeholder="Select"
          multiple
          closeOnChange={false}
          value={value}
          options={options}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
    </Hercules>
  );
};

// chromatic disabled, similar to Object multiple
storiesOf('Select', module).add('Multiple', () => <Example />, {
  chromatic: { disable: true },
});
