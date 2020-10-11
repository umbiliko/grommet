import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Distribution, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleDistribution = () => (
  <Hercules theme={microfocus} full>
    <Distribution
      fill
      values={[
        { value: 50, color: 'light-3' },
        { value: 30, color: 'neutral-1' },
        { value: 20, color: 'brand' },
        { value: 10, color: 'light-3' },
        { value: 5, color: 'neutral-1' },
      ]}
    >
      {value => (
        <Box pad="xsmall" background={value.color} fill>
          <Text size="large">{value.value}</Text>
        </Box>
      )}
    </Distribution>
  </Hercules>
);

storiesOf('Distribution', module).add('Simple', () => <SimpleDistribution />);
