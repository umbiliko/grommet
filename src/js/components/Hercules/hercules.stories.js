import React from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus, Hercules, Anchor, Box } from 'hercules-theme';
import { Add } from 'grommet-icons';

const customTheme = {
  global: {
    colors: {
      custom: '#cc6633',
    },
  },
};

const Themed = () => (
  <Hercules theme={customTheme}>
    <Box pad="medium">
      <Anchor icon={<Add />} label="Add" color="custom" />
    </Box>
  </Hercules>
);

const Plain = () => (
  <>
    <Hercules plain>
      <Box pad="medium">
        <p>Plain Hercules</p>
      </Box>
    </Hercules>
    <Hercules>
      <Box pad="medium">
        <p>Not plain Hercules</p>
      </Box>
    </Hercules>
  </>
);

const GrommetVars = () => (
  <Hercules theme={microfocus} cssVars>
    <Box pad="medium" background="var(--accent-2)" gap="medium">
      <Box>
        Checkout Hercules variables, you can find them in the StyledGrommet DOM.
      </Box>
      <Box with>
        For example, the background color in this Box is using var(--accent-2)
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Hercules', module)
  .add('Plain', () => <Plain />)
  .add('Theme', () => <Themed />)
  .add('Vars', () => <GrommetVars />);
