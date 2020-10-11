import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { RadioButtonGroup } from 'hercules-theme';

export const App = () => {
  const postMethods = [
    { label: 'FTP', value: 'FTP' },
    {
      label: 'File System',
      value: 'FileSystem',
    },
    {
      label: 'FTP & File System',
      value: 'FTPCopy',
    },
  ];

  // Type arguments can only be used in TypeScript files.
  // Remove <string | object> if you are not using Typescript.
  const [value, setValue] = useState<string | object>(postMethods[0]);

  return (
    <RadioButtonGroup
      name="radio"
      options={postMethods}
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
};

storiesOf('RadioButtonGroup', module).add('TS-Simple', () => <App />);
