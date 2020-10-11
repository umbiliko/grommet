import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor, Box, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Size = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(
          size => (
            <Box key={size} margin="small">
              <Anchor size={size} label={size} href="#" />
            </Box>
          ),
        )}
      </Box>
    </Hercules>
  );
};

storiesOf('Anchor', module).add('Size', () => <Size />);
