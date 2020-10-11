import React, { useState } from 'react';
import { render } from 'react-dom';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, RangeSelector, Stack, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const RANGE_MIN = 0;
const RANGE_MAX = 100;

function Thin({ initialRange = [0, 100], label }) {
  const [range, setRange] = useState(initialRange);

  return (
    <Box gap="small" pad="xlarge">
      {label ? <Text>{label}</Text> : null}
      <Stack>
        <Box background="light-4" height="6px" direction="row" />
        <RangeSelector
          direction="horizontal"
          min={RANGE_MIN}
          max={RANGE_MAX}
          step={1}
          values={range}
          onChange={nextRange => {
            setRange(nextRange);
          }}
        />
      </Stack>
      <Box align="center">
        <Text size="small">{`${range[0]}% - ${range[1]}%`}</Text>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <Hercules theme={microfocus}>
      <Box pad="small">
        <Thin label="My Range Selector" />
      </Box>
    </Hercules>
  );
}

render(<App />, document.getElementById('root'));

storiesOf('RangeSelector', module).add('Thin', () => <App />);
