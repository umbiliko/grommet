import React, { useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus, Box, Form, FormField, TextInput, Hercules } from 'hercules-theme';

const FormFieldStates = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Form>
          <Box border gap="medium" pad="large" width="medium">
            <FormField htmlFor="enabled-id" name="enabled" label="Default">
              <TextInput
                id="enabled-id"
                name="enabled"
                placeholder="Enter a username"
              />
            </FormField>
            <FormField htmlFor="focus-id" name="focus" label="Focus State">
              <TextInput
                id="focus-id"
                name="focus"
                placeholder="Enter a username"
                ref={inputRef}
              />
            </FormField>
            <FormField
              htmlFor="info-id"
              name="info-demo"
              label="Info State"
              info="Unique name. No spaces. May include '-' as a separator."
            >
              <TextInput
                id="info-id"
                name="info-demo"
                placeholder="Enter a username"
                value="fluffyKi"
              />
            </FormField>
            <FormField
              htmlFor="error-id"
              name="error-demo"
              label="Error State"
              error="It looks like that username is already taken. Bummer."
            >
              <TextInput
                id="error-id"
                name="error-demo"
                placeholder="Enter a username"
                value="fluffyKitty123"
              />
            </FormField>
            <FormField
              htmlFor="disabled-id"
              name="disabled"
              label="Disabled State"
              disabled
            >
              <TextInput
                id="disabled-id"
                name="disabled"
                placeholder="Enter a username"
                disabled
              />
            </FormField>
          </Box>
        </Form>
      </Box>
    </Hercules>
  );
};

storiesOf('Form', module).add('Field states', () => <FormFieldStates />);
