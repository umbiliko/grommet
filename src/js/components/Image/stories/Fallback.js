import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Image } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Fallback = () => (
  <Hercules theme={microfocus}>
    <Image
      fallback="//v2.grommet.io/assets/IMG_4245.jpg"
      src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg"
    />
  </Hercules>
);

storiesOf('Image', module).add('Fallback', () => <Fallback />);
