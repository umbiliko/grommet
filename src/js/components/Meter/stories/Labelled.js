import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Meter, Stack, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const LabelledMeter = () => {
  const meterValue = 30;

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[{ value: meterValue }]}
            size="xsmall"
            thickness="small"
          />
          <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
            <Text size="xlarge" weight="bold">
              {meterValue}
            </Text>
            <Text size="small">%</Text>
          </Box>
        </Stack>
      </Box>
    </Hercules>
  );
};

storiesOf('Meter', module).add('Labelled', () => <LabelledMeter />);
