import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, RangeSelector, Stack, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

const customThemeRangeSelector = deepMerge(microfocus, {
  global: {
    borderSize: {
      small: '6px',
    },
    edgeSize: {
      small: '13px',
    },
    spacing: '10px',
    colors: {
      control: 'accent-2',
      border: 'brand',
    },
  },
  rangeSelector: {
    background: {
      invert: {
        color: 'brand',
      },
    },
    edge: {
      type: 'bar',
    },
  },
});

const CustomRangeSelector = ({ direction = 'horizontal', ...rest }) => {
  const [range, setRange] = useState([12, 16]);
  const onChange = values => {
    setRange(values);
  };

  return (
    <Hercules theme={customThemeRangeSelector}>
      <Box align="center" pad="large">
        <Stack>
          <Box
            direction={direction === 'vertical' ? 'column' : 'row'}
            justify="between"
          >
            {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(value => (
              <Box
                key={value}
                width="xxsmall"
                height="xxsmall"
                align="center"
                pad="small"
                border={false}
              >
                <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            invert
            direction={direction}
            min={10}
            max={20}
            size="full"
            values={range}
            onChange={onChange}
            {...rest}
          />
        </Stack>
      </Box>
    </Hercules>
  );
};

storiesOf('RangeSelector', module).add('Custom', () => <CustomRangeSelector />);
