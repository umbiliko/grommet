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
        <Box width="medium">
          <DateInput format="mm/dd/yyyy" value={value} onChange={onChange} />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('DateInput', module).add('Format', () => <Example />);
