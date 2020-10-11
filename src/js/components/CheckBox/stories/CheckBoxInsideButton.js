import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, CheckBox, Hercules, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const CheckBoxInsideButton = () => {
  const [checked, setChecked] = useState(false);
  const onButtonClick = () => setChecked(!checked);
  const onCheckboxChange = () => {};

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <Button hoverIndicator="background" onClick={onButtonClick}>
          <CheckBox
            tabIndex="-1"
            checked={checked}
            label={<Text>Hi</Text>}
            onChange={onCheckboxChange}
          />
        </Button>
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBox', module).add('Inside a button', () => (
  <CheckBoxInsideButton />
));
