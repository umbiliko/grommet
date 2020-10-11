import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Box,
  Button,
  Hercules,
  Form,
  FormField,
  Text,
  TextInput,
} from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

// This example shows a way to perform validation across multiple fields.
const Example = () => {
  const [value, setValue] = React.useState({ name: 'a', email: 'b' });
  const message =
    value.name && value.email && value.name[0] !== value.email[0]
      ? 'Mismatched first character'
      : undefined;
  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={({ value: nextValue }) => console.log(nextValue)}
          >
            <FormField label="Name" name="name" required>
              <TextInput name="name" type="name" />
            </FormField>

            <FormField label="Email" name="email" required>
              <TextInput name="email" type="email" />
            </FormField>

            {message && (
              <Box pad={{ horizontal: 'small' }}>
                <Text color="status-error">{message}</Text>
              </Box>
            )}

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('Form', module).add('Aggregate validation', () => <Example />);
