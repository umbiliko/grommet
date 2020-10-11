import React from 'react';
import { storiesOf } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';

import { Box, DateInput, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  const [value, setValue] = React.useState();
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <DateInput format="dd/mm/yyyy" value={value} onChange={onChange} />
        </Box>
      </Box>
    </Hercules>
  );
};

if (!isChromatic()) {
  storiesOf('DateInput', module).add('European', () => <Example />);
}
