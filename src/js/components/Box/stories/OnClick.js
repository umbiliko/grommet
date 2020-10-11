import React from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction } from 'grommet-icons';

import { Hercules, Box, Text } from 'hercules-theme';
import { microfocus } from '../../../themes';

const OnClickBox = () => (
  <Hercules theme={microfocus}>
    <Box justify="center" align="center" pad="large">
      {/* eslint-disable no-alert */}
      <Box
        border
        pad="large"
        align="center"
        round
        gap="small"
        hoverIndicator
        onClick={() => {
          alert('clicked');
        }}
      >
        <Attraction size="large" />
        <Text>Party</Text>
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Box', module).add('onClick', () => <OnClickBox />);
