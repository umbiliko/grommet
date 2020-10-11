import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Image } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Simple = () => (
  <Hercules theme={microfocus}>
    <Image src="//v2.grommet.io/assets/IMG_4245.jpg" />
  </Hercules>
);

storiesOf('Image', module).add('Simple', () => <Simple />);
