import React from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus, Box, FormField, Form, TextArea, Hercules } from 'hercules-theme';

const FormFieldTextArea = props => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Form>
        <FormField
          label="Label"
          htmlFor="text-area"
          {...props}
          component={TextArea}
          placeholder="placeholder"
        />
      </Form>
    </Box>
  </Hercules>
);

storiesOf('TextArea', module).add('Form with placeholder', () => (
  <FormFieldTextArea />
));
