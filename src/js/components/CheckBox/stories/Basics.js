import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, CheckBox } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleCheckBox = ({ checked: checkedProp, ...rest }) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const onChange = event => setChecked(event.target.checked);

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <CheckBox {...rest} checked={checked} onChange={onChange} />
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBox', module)
  .add('Simple', () => <SimpleCheckBox label="Choice" />)
  .add('Toggle', () => <SimpleCheckBox label="Choice" toggle />)
  .add('Disabled', () => <SimpleCheckBox label="Choice" checked disabled />)
  .add('Reverse', () => <SimpleCheckBox label="Choice" reverse />)
  .add('No label', () => <SimpleCheckBox />);
