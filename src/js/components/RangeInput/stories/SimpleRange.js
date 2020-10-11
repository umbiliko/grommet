import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, RangeInput } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleRangeInput = () => {
  const [value, setValue] = React.useState(5);

  const onChange = event => setValue(event.target.value);

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <RangeInput value={value} onChange={onChange} />
      </Box>
    </Hercules>
  );
};

storiesOf('RangeInput', module).add('Simple', () => <SimpleRangeInput />);
