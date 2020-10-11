import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Button } from 'hercules-theme';

const customButtonColor = {
  global: { font: { family: 'Arial' } },
  button: {
    color: {
      light: 'white',
      dark: 'white',
    },
  },
};

const Colored = props => (
  <Hercules theme={customButtonColor}>
    <Box align="center" pad="large" gap="small">
      <Button primary label="Submit" onClick={() => {}} />
      <Button
        primary
        color="dark-1"
        label="custom theme text colored"
        onClick={() => {}}
      />
      <Button
        primary
        color="dark-1"
        label="dark-1"
        onClick={() => {}}
        {...props}
      />
      <Button
        primary
        color="#111111"
        label="#111111"
        onClick={() => {}}
        {...props}
      />
      <Button primary color="#777" label="#777" onClick={() => {}} {...props} />
      <Button
        plain
        color="red"
        label="plain red"
        onClick={() => {}}
        {...props}
      />
      <Button plain label="plain inherit" onClick={() => {}} {...props} />
    </Box>
  </Hercules>
);

storiesOf('Button', module).add('Colored', () => <Colored />);
