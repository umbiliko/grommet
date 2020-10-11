import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, TextArea } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleTextArea = props => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <TextArea value={value} onChange={onChange} {...props} />
      </Box>
    </Hercules>
  );
};

storiesOf('TextArea', module)
  .add('Simple', () => <SimpleTextArea resize />)
  .add('Non resizable', () => <SimpleTextArea resize={false} />);
