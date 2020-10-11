import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DateInput } from 'hercules-theme';
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
      <Box align="center" pad="large">
        <DateInput inline value={value} onChange={onChange} />
      </Box>
    </Hercules>
  );
};

storiesOf('DateInput', module).add('Inline', () => <Example />);
