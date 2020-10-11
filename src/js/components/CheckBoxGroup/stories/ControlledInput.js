import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button, CheckBoxGroup, Form, FormField, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const CheckBoxGroupForm = () => {
  const [value, setValue] = useState();

  return (
    <Hercules theme={microfocus}>
      <Box pad="medium" width="medium">
        <Form
          onSubmit={({ value: values, touched }) =>
            // 'touched' is a single boolean value indication of
            // whether any of the checkboxes had changed.
            console.log('Submit', values, touched)
          }
        >
          <FormField name="controlled">
            <CheckBoxGroup
              id="check-box-group-id"
              name="controlled"
              value={value}
              onChange={({ value: nextValue }) => setValue(nextValue)}
              options={['Maui', 'Jerusalem', 'Wuhan']}
            />
          </FormField>
          <Button type="submit" label="Submit" />
        </Form>
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBoxGroup', module).add('Form controlled input', () => (
  <CheckBoxGroupForm />
));
