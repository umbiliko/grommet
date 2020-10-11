import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import {
  microfocus,
  Box,
  CheckBoxGroup,
  Form,
  FormField,
  Select,
  Grid,
  Hercules,
  RadioButtonGroup,
  RangeInput,
  Text,
  TextArea,
  TextInput,
  ThemeContext,
} from 'hercules-theme';
import { deepMerge } from 'hercules-theme/utils';

const allOptions = Array(3)
  .fill()
  .map((_, i) => `option ${i + 1}`);

const borderPositions = [
  {
    name: 'Default Hercules Theme',
    theme: microfocus,
  },
  {
    name: 'Border Inner',
    theme: deepMerge(microfocus, {
      formField: {
        border: { position: 'inner', side: 'all' },
      },
    }),
  },
  {
    name: 'Border Outer',
    theme: deepMerge(microfocus, {
      formField: {
        border: { position: 'outer', side: 'all' },
      },
    }),
  },
  {
    name: 'Border None',
    theme: deepMerge(microfocus, {
      formField: {
        border: { position: 'none' },
      },
    }),
  },
  {
    name: 'Border Undefined',
    theme: deepMerge(microfocus, {
      formField: {
        border: undefined,
        content: { pad: 'large' },
      },
    }),
  },
];

const FormExample = ({ index, borderPosition, theme }) => {
  const [value, setValue] = useState('');

  return (
    <Box background="#F7F7F7" gap="medium" pad="medium">
      <Text weight="bold">{borderPosition}</Text>
      <ThemeContext.Extend value={theme}>
        <Form>
          <FormField
            htmlFor={`textinput-${index}`}
            name="textinput"
            label="Label"
          >
            <TextInput
              id={`textinput-${index}`}
              name="textinput"
              placeholder="placeholder text"
            />
          </FormField>
          <FormField htmlFor={`select-${index}`} name="select" label="Label">
            <Select
              id={`select-${index}`}
              name="select"
              placeholder="-- select --"
              options={allOptions}
              value={value}
              onChange={({ option }) => setValue(option)}
            />
          </FormField>
          <FormField htmlFor={`rbg-${index}`} name="rbg" label="Label">
            <RadioButtonGroup
              id={`rbg-${index}`}
              name="rbg"
              options={allOptions}
            />
          </FormField>
          <FormField htmlFor={`cbg-${index}`} name="cbg" label="Label">
            <CheckBoxGroup
              id={`cbg-${index}`}
              name="cbg"
              options={allOptions}
            />
          </FormField>
          <FormField
            htmlFor={`rangeInput-${index}`}
            name="rangeInput"
            label="Label"
          >
            <RangeInput id={`rangeInput-${index}`} name="rangeInput" />
          </FormField>
          <FormField
            htmlFor={`textArea-${index}`}
            name="textArea"
            label="Label"
          >
            <TextArea id={`textArea-${index}`} name="textArea" />
          </FormField>
        </Form>
      </ThemeContext.Extend>
    </Box>
  );
};

const FormFieldBorderPosition = () => (
  <Hercules theme={microfocus}>
    <Box pad="large">
      <Grid columns={{ count: 'fit', size: ['auto', 'medium'] }} gap="medium">
        {borderPositions &&
          borderPositions.map((example, index) => {
            return (
              <FormExample
                borderPosition={example.name}
                theme={example.theme}
                index={index}
              />
            );
          })}
      </Grid>
    </Box>
  </Hercules>
);

storiesOf('Form', module).add('Field border positions', () => (
  <FormFieldBorderPosition />
));
