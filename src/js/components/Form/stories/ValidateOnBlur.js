import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button, Hercules, Form, FormField, TextInput } from 'hercules-theme';
import { StatusGood } from 'grommet-icons';
import { microfocus } from 'hercules-theme/themes';

const Example = () => (
  <Hercules full theme={microfocus}>
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form
          validate="blur"
          onReset={event => console.log(event)}
          onSubmit={({ value }) => console.log('Submit', value)}
        >
          <FormField
            label="Name"
            name="name"
            required
            validate={[
              { regexp: /^[a-z]/i },
              name => {
                if (name && name.length === 1) return 'must be >1 character';
                return undefined;
              },
              name => {
                if (name === 'good')
                  return {
                    message: (
                      <Box align="end">
                        <StatusGood />
                      </Box>
                    ),
                    status: 'info',
                  };
                return undefined;
              },
            ]}
          />

          <FormField label="Email" name="email" required>
            <TextInput name="email" type="email" />
          </FormField>

          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  </Hercules>
);

storiesOf('Form', module).add('Validate on blur', () => <Example />);
