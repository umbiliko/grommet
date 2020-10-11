import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Hercules, Box, Form, FormField, TextInput } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const allSuggestions = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

const FormFieldTextInput = props => {
  const [state, setState] = useState({
    value: '',
    suggestions: allSuggestions,
  });

  const onChange = event => {
    const {
      target: { value },
    } = event;
    // The line below escapes regular expression special characters:
    // [ \ ^ $ . | ? * + ( )
    const escapedText = value.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

    // Create the regular expression with modified value which
    // handles escaping special characters. Without escaping special
    // characters, errors will appear in the console
    const exp = new RegExp(escapedText, 'i');
    const suggestions = allSuggestions.filter(s => exp.test(s));
    setState({ value, suggestions });
  };

  const onSelect = event => setState({ ...state, value: event.suggestion });

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Form>
          <FormField label="Label" htmlFor="text-input" {...props}>
            <TextInput
              id="text-input"
              placeholder="placeholder"
              value={state.value}
              onChange={onChange}
              onSelect={onSelect}
              suggestions={state.suggestions}
            />
          </FormField>
        </Form>
      </Box>
    </Hercules>
  );
};

storiesOf('TextInput', module).add('Form', () => <FormFieldTextInput />);
