import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Button } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

import { Add } from 'grommet-icons';

const MultipleButton = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Box direction="row" align="center" gap="small" pad="xsmall">
        <Button label="Cancel" onClick={() => {}} />
        <Button
          color="dark-1"
          primary
          icon={<Add color="accent-1" />}
          label="Add"
          onClick={() => {}}
        />
      </Box>
      <Box direction="row" align="center" gap="small" pad="xsmall">
        <Button label="Cancel" onClick={() => {}} />
        <Button
          color="dark-1"
          primary
          icon={<Add />}
          label="Add"
          onClick={() => {}}
        />
      </Box>
      <Box direction="row" align="center" gap="small" pad="xsmall">
        <Button label="Cancel" onClick={() => {}} />
        <Button primary icon={<Add />} label="Add" onClick={() => {}} />
      </Box>
      <Box direction="row" align="center" gap="small" pad="xsmall">
        <Button label="Cancel" onClick={() => {}} />
        <Button
          color="light-2"
          primary
          icon={<Add />}
          label="Add"
          onClick={() => {}}
        />
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Button', module).add('Multiple', () => <MultipleButton />);
