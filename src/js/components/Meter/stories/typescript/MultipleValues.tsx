import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Meter, Stack, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const MultipleValues = () => {
  const total = 100;
  const [active, setActive] = useState(0);
  const [label, setLabel] = useState('');
  const [highlight, setHighlight] = useState(false);

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[
              {
                value: 70,
                onHover: over => {
                  setActive(over ? 70 : 0);
                  setLabel(over ? 'in use' : undefined);
                },
                onClick: event => {
                  setHighlight(() => !highlight);
                },
                highlight,
              },
              {
                value: 30,
                onHover: over => {
                  setActive(over ? 30 : 0);
                  setLabel(over ? 'available' : undefined);
                },
              },
            ]}
            max={100}
            size="small"
            thickness="medium"
          />
          <Box align="center">
            <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
              <Text size="xxlarge" weight="bold">
                {active || total}
              </Text>
              <Text>GB</Text>
            </Box>
            <Text>{label || 'total'}</Text>
          </Box>
        </Stack>
      </Box>
    </Hercules>
  );
};

storiesOf('Meter', module).add('Multiple values', () => <MultipleValues />);
