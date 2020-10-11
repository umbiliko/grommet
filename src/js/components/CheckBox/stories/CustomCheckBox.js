import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, CheckBox } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { normalizeColor, deepMerge } from 'hercules-theme/utils';

import { FormCheckmark } from 'grommet-icons';

const customCheckBoxTheme = {
  checkBox: {
    border: {
      color: {
        light: 'accent-2',
      },
      // width: 'xsmall',
      radius: '2px',
    },
    check: {
      extend: ({ theme, checked }) => `
        ${checked && `background-color: ${normalizeColor('neutral-1', theme)};`}
        `,
    },
    color: {
      light: 'neutral-3',
      dark: 'neutral-3',
    },
    gap: 'xsmall',
    hover: {
      border: {
        color: undefined,
      },
    },
    icon: {
      size: '18px',
      extend: 'stroke: white;',
    },
    icons: {
      checked: FormCheckmark,
    },
    size: '18px',
    extend: `
      color: #9C9C9C;
    `,
  },
};

const ThemedCheckBox = props => {
  const [checked, setChecked] = useState(false);

  return (
    <Hercules theme={deepMerge(microfocus, customCheckBoxTheme)}>
      <Box align="center" pad="large">
        <CheckBox
          {...props}
          label="Choice"
          checked={checked}
          onChange={event => setChecked(event.target.checked)}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBox', module).add('Custom', () => <ThemedCheckBox />);
