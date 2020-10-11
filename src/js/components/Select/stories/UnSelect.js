import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Select, Button } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const optionList = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];

const UnSelect = () => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.value);
  };

  const onClickClearOptions = () => {
    setValue('');
  };

  return (
    <Hercules theme={microfocus}>
      <Box
        pad="medium"
        direction="row"
        align="center"
        justify="center"
        gap="small"
      >
        <Select
          options={optionList}
          onChange={e => onChange(e)}
          value={value}
          placeholder="Select multiple options"
          multiple
        />
        <Button
          onClick={onClickClearOptions}
          disabled={!value}
          plain
          label="Clear All"
        />
      </Box>
    </Hercules>
  );
};

storiesOf('Select', module).add('Unselect', () => <UnSelect />);
