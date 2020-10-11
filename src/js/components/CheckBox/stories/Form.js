import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  microfocus,
  Box,
  Button,
  CheckBox,
  CheckBoxGroup,
  Form,
  FormField,
  Hercules,
} from 'hercules-theme';

const FormFieldCheckBox = props => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Form
        onSubmit={({ value, touched }) => console.log('Submit', value, touched)}
      >
        <FormField
          label="Toggle"
          name="toggle"
          htmlFor="check-box-toggle"
          {...props}
        >
          <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
            <CheckBox
              id="check-box-toggle"
              name="toggle"
              label="CheckBox"
              toggle
            />
          </Box>
        </FormField>
        <FormField label="Default" name="checkbox" htmlFor="check-box" required>
          <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
            <CheckBox id="check-box" name="checkbox" label="Required" />
          </Box>
        </FormField>
        <FormField
          label="Where would you like to visit"
          name="checkboxgroup"
          htmlFor="check-box-group"
          required
        >
          <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
            <CheckBoxGroup
              id="group"
              name="checkboxgroup"
              options={['Maui', 'Jerusalem', 'Wuhan']}
            />
          </Box>
        </FormField>
        <Button type="submit" label="Submit" />
      </Form>
    </Box>
  </Hercules>
);

storiesOf('CheckBox', module).add('Form', () => <FormFieldCheckBox />);
