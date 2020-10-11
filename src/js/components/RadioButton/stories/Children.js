import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, Button, RadioButton } from 'hercules-theme';
import { Ascend } from 'grommet-icons';
import { microfocus } from 'hercules-theme/themes';

const ChildrenRadioButton = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        >
          {({ checked }) => (
            <Ascend color={checked ? 'brand' : 'status-unknown'} />
          )}
        </RadioButton>

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </Hercules>
  );
};

storiesOf('RadioButton', module).add('Children', () => <ChildrenRadioButton />);
