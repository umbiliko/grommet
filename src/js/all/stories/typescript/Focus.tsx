import React from 'react';
import { storiesOf } from '@storybook/react';

import { deepMerge } from 'hercules-theme/utils';

import {
  microfocus,
  Anchor,
  Box,
  Button,
  Hercules,
  Menu,
  Text,
  TextInput,
} from 'hercules-theme';

const customFocus = deepMerge(microfocus, {
  global: {
    colors: {
      focus: 'neutral-3',
    },
  },
});

const CustomFocusFC = () => (
  <Hercules theme={customFocus}>
    <Box pad="small" gap="medium" width="medium">
      <Text>
        Focus on the input components and notice the custom focus color
      </Text>
      <TextInput placeholder="hi" />
      <Anchor href="">Anchor</Anchor>
      <Menu
        label="Menu"
        items={[{ label: 'One', onClick: () => {} }, { label: 'Two' }]}
      />
      <Button label="Button" onClick={() => {}} />
    </Box>
  </Hercules>
);

storiesOf('Theme', module).add('Focus', () => <CustomFocusFC />);
