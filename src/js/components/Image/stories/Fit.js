import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Image } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Fit = () => (
  <Hercules theme={microfocus}>
    <Box align="start" gap="medium">
      <Box height="small" width="small" border>
        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="contain" />
      </Box>
      <Box height="small" width="small" border>
        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Image', module).add('Fit', () => <Fit />);
