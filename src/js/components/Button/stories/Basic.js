import React from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus, Box, Button, Herculesom 'hercules-theme';

const BasicButtons = props => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="medium">
      <Button label="Default" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button label="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button disabled label="Disabled" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button primary label="Primary" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button
        primary
        label="Active Primary"
        active
        onClick={() => {}}
        {...props}
      />
    </Box>
  </Hercules>
);

storiesOf('Button', module).add('Basic', () => <BasicButtons />);
