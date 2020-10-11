import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor, Box, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Disabled = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Box margin="small">
          <Anchor disabled label="Disabled Anchor" />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('Anchor', module).add('Disabled', () => <Disabled />);
