import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, TextInput } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const suggestions = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

const OnSelect = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  const onSelect = event => setValue(event.suggestion);

  const onHighlight = event => {
    if (event.target.selectionStart !== event.target.selectionEnd) {
      console.log(
        event.target.value.substring(
          event.target.selectionStart,
          event.target.selectionEnd,
        ),
      );
    }
  };

  return (
    <Hercules full theme={microfocus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            value={value}
            onChange={onChange}
            onSelect={onHighlight}
            onSuggestionSelect={onSelect}
            suggestions={suggestions}
          />
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('TextInput', module).add(
  'onSelect and onSuggestionSelect',
  () => <OnSelect />,
  {
    chromatic: { disable: true },
  },
);
