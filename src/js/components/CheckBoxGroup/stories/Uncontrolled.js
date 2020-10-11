import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Box,
  Button,
  CheckBoxGroup,
  Form,
  FormField,
  Hercules,
  Heading,
} from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const CheckBoxGroupForm = () => {
  return (
    <Hercules theme={microfocus}>
      <Box pad="medium">
        <Heading level="3">Form with string options</Heading>
        <Form
          onSubmit={({ value, touched }) =>
            console.log('Submit', value, touched)
          }
        >
          <FormField
            name="am-pm"
            component={CheckBoxGroup}
            options={['morning', 'evening']}
          />
          <Button type="submit" label="Submit" />
        </Form>
      </Box>
      <Box pad="medium">
        <Heading level="3">Form with object options</Heading>
        <Form
          onSubmit={({ value, touched }) =>
            console.log('Submit object options', value, touched)
          }
        >
          <FormField name="drink">
            <CheckBoxGroup
              name="drink"
              valueKey="id"
              options={[
                { label: 'Coffee', id: '1' },
                { label: 'Tea', id: '2' },
                { label: 'Milk', id: '3' },
              ]}
            />
          </FormField>
          <Button type="submit" label="Submit" />
        </Form>
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBoxGroup', module).add('Form uncontrolled', () => (
  <CheckBoxGroupForm />
));
