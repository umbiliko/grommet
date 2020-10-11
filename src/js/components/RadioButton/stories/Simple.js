import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Button, RadioButton } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleRadioButton = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        />

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </Hercules>
  );
};

storiesOf('RadioButton', module).add('Simple', () => <SimpleRadioButton />);
