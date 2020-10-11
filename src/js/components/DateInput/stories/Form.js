import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button, DateInput, Form, FormField, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  const [value, setValue] = React.useState({ value: '' });
  const onChange = nextValue => {
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Form
          value={value}
          onChange={onChange}
          onSubmit={({ value: nextValue }) => console.log(nextValue)}
        >
          <FormField name="value" label="value" required>
            <DateInput name="value" format="mm/dd/yyyy" />
          </FormField>
          <Button type="submit" label="submit" />
        </Form>
      </Box>
    </Hercules>
  );
};

storiesOf('DateInput', module).add('Form', () => <Example />);
