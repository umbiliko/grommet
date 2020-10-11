import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DateInput, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Hercules theme={microfocus}>
      <Box direction="row" align="center" justify="center" pad="large">
        <Text weight="bold">
          {value && new Date(value).toLocaleDateString()}
        </Text>
        <DateInput value={value} onChange={onChange} />
      </Box>
    </Hercules>
  );
};

storiesOf('DateInput', module).add('Simple', () => <Example />, {
  chromatic: { disable: true },
});
