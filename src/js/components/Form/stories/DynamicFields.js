import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import {
  Box,
  Button,
  CheckBox,
  Hercules,
  Form,
  FormField,
  TextInput,
} from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  const [haveAlias, setHaveAlias] = useState();
  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={event => console.log(event)}
            onSubmit={({ value }) => console.log('Submit', value)}
          >
            <FormField label="Name" name="name" required>
              <TextInput name="name" />
            </FormField>
            <FormField name="haveAlias">
              <CheckBox
                name="haveAlias"
                label="alias?"
                checked={haveAlias}
                onChange={() => setHaveAlias(!haveAlias)}
              />
            </FormField>
            {haveAlias && (
              <FormField label="Alias" name="alias" required>
                <TextInput name="alias" />
              </FormField>
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

storiesOf('Form', module).add('Dynamic fields', () => <Example />);
