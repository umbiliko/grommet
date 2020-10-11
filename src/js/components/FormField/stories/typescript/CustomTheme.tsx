import React from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus, Box, FormField, TextArea, Hercules } from 'hercules-theme';
import { deepMerge } from 'hercules-theme/utils';
import { ThemeType } from 'hercules-theme/themes';

// Type annotations can only be used in TypeScript files.
// Remove ': ThemeType' if you are not using Typescript.
const customFormFieldTheme: ThemeType = {
  global: {
    font: {
      size: '13px',
    },
    input: {
      weight: 400,
    },
  },
  formField: {
    label: {
      color: 'dark-3',
      size: 'xsmall',
      margin: { vertical: '0', bottom: 'small', horizontal: '0' },
      weight: 600,
    },
    border: false,
    margin: '0',
  },
};

const CustomFormField = () => (
  <Hercules theme={deepMerge(microfocus, customFormFieldTheme)}>
    <Box align="center" pad="large">
      <FormField label="Label" htmlFor="text-area">
        <TextArea id="text-area" placeholder="placeholder" />
      </FormField>
    </Box>
  </Hercules>
);

storiesOf('FormField', module).add('Custom theme', () => <CustomFormField />);
