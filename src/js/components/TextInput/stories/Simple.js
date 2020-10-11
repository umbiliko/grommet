import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, TextInput } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleTextInput = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput value={value} onChange={onChange} />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('TextInput', module).add('Simple', () => <SimpleTextInput />, {
  chromatic: { disable: true },
});
