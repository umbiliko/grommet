import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Image, Anchor } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Fill = () => {
  return (
    <Hercules theme={microfocus}>
      <Box align="start" gap="small">
        <Box height="small" width="small" border>
          <Anchor href="#">
            <Image fit="cover" fill src="//v2.grommet.io/assets/IMG_4245.jpg" />
          </Anchor>
        </Box>
        <Box height="small" width="small" border>
          <Anchor href="#">
            <Image
              fit="contain"
              fill
              src="//v2.grommet.io/assets/IMG_4245.jpg"
            />
          </Anchor>
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('Image', module).add('Fill', () => <Fill />);
