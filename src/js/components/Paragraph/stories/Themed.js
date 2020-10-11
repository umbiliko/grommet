import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Paragraph } from 'hercules-theme';
import { deepMerge } from 'hercules-theme/utils';
import { microfocus } from 'hercules-theme/themes';

const customTheme = deepMerge(microfocus, {
  paragraph: {
    font: {
      family: 'Comic Sans MS',
    },
  },
});

const All = () => (
  <Hercules theme={customTheme}>
    <Paragraph>
      The font family for this paragraph is being defined by a custom theme.
    </Paragraph>
  </Hercules>
);

// disabling chromatic because snapshot doesn't capture font
storiesOf('Paragraph', module).add('Themed', () => <All />, {
  chromatic: { disable: true },
});
