import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, CheckBoxGroup, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const objectOptions = [];
for (let i = 1; i <= 5; i += 1) {
  objectOptions.push({
    label: `option ${i}`,
    val: i,
  });
}

const Example = () => {
  return (
    <Hercules theme={microfocus}>
      <Box pad="medium">
        <CheckBoxGroup
          labelKey="label"
          valueKey="val"
          options={objectOptions}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBoxGroup', module).add('Object options', () => <Example />);
