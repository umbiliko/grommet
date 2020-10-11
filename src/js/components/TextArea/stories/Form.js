import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button, Form, FormField, Hercules, TextArea } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  const [value, setValue] = React.useState({ name: '', email: '', value: '' });

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onSubmit={() => console.log(value)}
        >
          <FormField name="value" label="value" required>
            <TextArea name="value" />
          </FormField>
          <Button type="submit" label="submit" />
        </Form>
      </Box>
    </Hercules>
  );
};

storiesOf('TextArea', module).add('Form', () => <Example />);
