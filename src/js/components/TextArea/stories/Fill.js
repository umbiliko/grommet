import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, TextArea } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const FillTextArea = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Hercules theme={microfocus}>
      <Box
        width="large"
        height="medium"
        border={{ color: 'brand', size: 'medium' }}
      >
        <TextArea value={value} onChange={onChange} fill />
      </Box>
    </Hercules>
  );
};

storiesOf('TextArea', module).add('Fill', () => <FillTextArea />);
