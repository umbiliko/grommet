import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Hercules, MaskedInput } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const UrlMaskedInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <MaskedInput
            mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('MaskedInput', module).add('URL', () => <UrlMaskedInput />, {
  chromatic: { disable: true },
});
