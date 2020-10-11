import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Form, TextInput, Text } from 'hercules-theme';

const StyledPlaceholder = () => {
  return (
    <Box>
      <Form>
        <TextInput name="name" placeholder={<Text>footer</Text>} />
      </Form>
    </Box>
  );
};

storiesOf('TextInput', module).add('Styled placeholder', () => (
  <StyledPlaceholder />
));
