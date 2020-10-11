import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Select } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          options={['one', 'two']}
          onChange={({ option }) => console.log(option)}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Select', module).add('Uncontrolled', () => <Example />, {
  chromatic: { disable: true },
});
