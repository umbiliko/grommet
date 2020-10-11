import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, CheckBox, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const boxStyle = {
  position: 'relative',
  display: 'block',
};
const titleBoxBackground = { color: 'neutral-1' };
const titleBoxStyle = { position: 'sticky', top: 0 };

const checkboxes = Array(8)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const removeItemFromArray = (array, value) =>
  array.filter(item => item !== value);

const CheckBoxWithStickyDiv = () => {
  const [checks, setChecks] = useState([]);
  const onCheck = value => ({ target }) => {
    if (target.checked) {
      setChecks([...checks, value]);
    } else {
      setChecks(removeItemFromArray(checks, value));
    }
  };

  return (
    <Hercules theme={microfocus}>
      <Box pad="large" align="center">
        <Box height="120px" width="120px" overflow="auto" style={boxStyle}>
          <Box background={titleBoxBackground} style={titleBoxStyle}>
            Click &amp; Scroll
          </Box>
          {checkboxes.map(item => (
            <CheckBox
              key={item}
              checked={checks.includes(item)}
              label={item}
              onChange={onCheck(item)}
            />
          ))}
        </Box>
      </Box>
    </Hercules>
  );
};

storiesOf('CheckBox', module).add('With sticky div', () => (
  <CheckBoxWithStickyDiv />
));
