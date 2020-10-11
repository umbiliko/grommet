import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor, Box, Hercules, Paragraph } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Inline = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Paragraph>
          This is <Anchor label="an inline link" href="#" /> with surrounding
          text.
        </Paragraph>
      </Box>
    </Hercules>
  );
};

storiesOf('Anchor', module).add('Inline', () => <Inline />);
