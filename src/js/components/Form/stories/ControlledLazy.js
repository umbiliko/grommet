import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Box,
  Button,
  CheckBox,
  Hercules,
  Form,
  FormField,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
  TextInput,
} from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const defaultValue = {
  name: '',
  email: '',
  subscribe: false,
  ampm: '',
  size: '',
  comments: '',
  age: '',
};

const Example = () => {
  const [value, setValue] = React.useState(defaultValue);
  React.useEffect(
    () =>
      setValue({
        name: 'initial',
        email: 'initial@my.com',
        subscribe: true,
        ampm: 'evening',
        size: 'large',
        comments: 'initial',
        age: 60,
      }),
    [],
  );
  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            value={value}
            onChange={nextValue => {
              console.log('Change', nextValue);
              setValue(nextValue);
            }}
            onReset={() => setValue(defaultValue)}
            onSubmit={event =>
              console.log('Submit', event.value, event.touched)
            }
          >
            <FormField label="Name" name="name">
              <TextInput name="name" />
            </FormField>
            <FormField label="Email" name="email" required>
              <MaskedInput
                name="email"
                mask={[
                  { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                  { fixed: '@' },
                  { regexp: /^[\w]+$/, placeholder: 'my' },
                  { fixed: '.' },
                  { regexp: /^[\w]+$/, placeholder: 'com' },
                ]}
              />
            </FormField>
            <FormField name="subscribe">
              <CheckBox name="subscribe" label="Subscribe?" />
            </FormField>
            <FormField name="ampm">
              <RadioButtonGroup name="ampm" options={['morning', 'evening']} />
            </FormField>
            <FormField label="Size" name="size">
              <Select name="size" options={['small', 'medium', 'large']} />
            </FormField>
            <FormField label="Comments" name="comments">
              <TextArea name="comments" />
            </FormField>
            <FormField label="Age" name="age" pad>
              <RangeInput name="age" min={15} max={75} />
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
};

// chromatic disabled because snapshot is the same as Controlled
storiesOf('Form', module).add('Controlled lazy', () => <Example />, {
  chromatic: { disable: true },
});
