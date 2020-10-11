import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, RadioButtonGroup } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const DisabledRadioButtonGroup = ({ value: initialValue, ...props }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <RadioButtonGroup
          name="radio"
          options={[
            { label: 'Choice 1', value: 'c1' },
            { label: 'Choice 2', value: 'c2' },
            { label: 'Choice 3', value: 'c3' },
          ]}
          disabled
          value={value}
          onChange={event => setValue(event.target.value)}
          {...props}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('RadioButtonGroup', module).add('Disabled', () => (
  <DisabledRadioButtonGroup />
));
