import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, CheckBoxGroup, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Simple = () => {
  return (
    <Hercules theme={microfocus}>
      <Box pad="medium">
        <CheckBoxGroup options={['First', 'Second', 'Third']} />
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBoxGroup', module).add('Simple', () => <Simple />);
