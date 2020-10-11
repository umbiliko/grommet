import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, DateInput } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const dateFormat = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
});

const Example = () => {
  const [value, setValue] = React.useState([
    '2020-07-31T15:27:42.920Z',
    '2020-08-07T15:27:42.920Z',
  ]);
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <DateInput
          value={value}
          buttonProps={{
            label: `${dateFormat.format(
              new Date(value[0]),
            )} - ${dateFormat.format(new Date(value[1]))}`,
          }}
          onChange={onChange}
        />
      </Box>
    </Hercules>
  );
};

storiesOf('DateInput', module).add('Range', () => <Example />, {
  chromatic: { disable: true },
});
