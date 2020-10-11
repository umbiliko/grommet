import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { CaretDown } from 'grommet-icons';

import { Box, Hercules, Select } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const CustomSelect = ({ ...rest }) => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          plain
          valueLabel={
            <Box
              background="brand"
              width="small"
              round="small"
              overflow="hidden"
              align="center"
            >
              {value || 'Select...'}
            </Box>
          }
          icon={
            <Box>
              <CaretDown color="black" />
            </Box>
          }
          {...rest}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Select', module).add('Custom', () => <CustomSelect />);
