import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hercules, Heading } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

const customlevel = deepMerge(microfocus, {
  heading: {
    level: {
      5: {
        small: {
          size: '12px',
          height: '16px',
        },
        medium: {
          size: '14px',
          height: '18px',
        },
        large: {
          size: '16px',
          height: '20px',
        },
      },
    },
    extend: props => `color: ${props.theme.global.colors.brand}`,
  },
});
const CustomHeading = () => (
  <Hercules theme={customlevel}>
    <Heading level={5} size="small">
      Heading level 5 small
    </Heading>
    <Heading level={5} size="medium">
      Heading level 5 small
    </Heading>
    <Heading level={5} size="large">
      Heading level 5 small
    </Heading>
  </Hercules>
);

storiesOf('Heading', module).add('Custom', () => <CustomHeading />);
