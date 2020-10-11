import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Video } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleVideo = props => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Video {...props}>
        <source src="small.mp4" type="video/mp4" />
        <source
          src="http://techslides.com/demos/sample-videos/small.webm"
          type="video/webm"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.ogv"
          type="video/ogg"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.3gp"
          type="video/3gp"
        />
      </Video>
    </Box>
  </Hercules>
);

storiesOf('Video', module)
  .add('Simple', () => <SimpleVideo />)
  .add('Controls below', () => <SimpleVideo controls="below" />);
