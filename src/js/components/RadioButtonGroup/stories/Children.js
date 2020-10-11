import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, RadioButtonGroup } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { Ascend, Descend } from 'grommet-icons';

const ChildrenRadioButtonGroup = () => {
  const [value, setValue] = useState();

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <RadioButtonGroup
          name="radio"
          direction="row"
          gap="xsmall"
          options={['asc', 'desc']}
          value={value}
          onChange={event => setValue(event.target.value)}
        >
          {(option, { checked, hover }) => {
            const Icon = option === 'asc' ? Ascend : Descend;
            let background;
            if (checked) background = 'brand';
            else if (hover) background = 'light-4';
            else background = 'light-2';
            return (
              <Box background={background} pad="xsmall">
                <Icon />
              </Box>
            );
          }}
        </RadioButtonGroup>
      </Box>
    </Hercules>
  );
};

storiesOf('RadioButtonGroup', module).add('Children', () => (
  <ChildrenRadioButtonGroup />
));
