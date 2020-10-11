import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, MaskedInput } from 'hercules-theme';
import { MailOption } from 'grommet-icons';
import { microfocus } from 'hercules-theme/themes';

const EmailMaskedInput = () => {
  const [value, setValue] = React.useState('');

  const emailMask = [
    {
      regexp: /^[\w\-_.]+$/,
      placeholder: 'example',
    },
    { fixed: '@' },
    {
      regexp: /^[\w]+$/,
      placeholder: 'my',
    },
    { fixed: '.' },
    {
      regexp: /^[\w]+$/,
      placeholder: 'com',
    },
  ];

  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <MaskedInput
            icon={<MailOption />}
            mask={emailMask}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <MaskedInput
            reverse
            icon={<MailOption />}
            mask={emailMask}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('MaskedInput', module).add('Email with icon', () => (
  <EmailMaskedInput />
));
