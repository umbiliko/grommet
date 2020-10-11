import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, TextArea } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

const customTheme = deepMerge(microfocus, {
  textArea: {
    extend: () => `
      font-size: 40px;
      color: red;
    `,
  },
});

const ThemedTextArea = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Hercules theme={customTheme}>
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

storiesOf('TextArea', module).add('Themed', () => <ThemedTextArea />);
