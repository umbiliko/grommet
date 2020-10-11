import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Hercules, TextInput } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { Search } from 'grommet-icons';

const IconTextInput = () => {
  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <TextInput icon={<Search />} placeholder="search ..." />
          <TextInput icon={<Search />} reverse placeholder="search ..." />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('TextInput', module).add('Icon', () => <IconTextInput />);
