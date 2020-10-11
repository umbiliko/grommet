import React from 'react';
import { storiesOf } from '@storybook/react';
import { microfocus, Hercules, Box, Text } from 'hercules-theme';

const Background = () => {
  const themeColor = 'background-back';
  const hexValue = '#DCD0FF';
  const cssColor = 'gold';
  return (
    <Box gap="medium">
      <Hercules>
        <Box pad="medium">
          <Text>Hercules with no theme or background prop</Text>
        </Box>
      </Hercules>
      <Hercules theme={hpe} themeMode="dark">
        <Box pad="medium">
          <Text>Hercules with theme & themeMode but no background prop</Text>
        </Box>
      </Hercules>
      <Hercules theme={hpe} themeMode="light" background={themeColor}>
        <Box pad="medium">
          <Text>
            Hercules with background as theme color of &apos;{themeColor}&apos;
          </Text>
        </Box>
      </Hercules>
      <Hercules theme={microfocus} background={hexValue}>
        <Box pad="medium">
          <Text>
            Hercules background as HEX value of &apos;{hexValue}&apos;
          </Text>
        </Box>
      </Hercules>
      <Hercules theme={microfocus} background={cssColor}>
        <Box pad="medium">
          <Text>
            Hercules with background as CSS color name of &apos;{cssColor}&apos;
          </Text>
        </Box>
      </Hercules>
      <Hercules
        theme={microfocus}
        background={{
          color: 'pink',
          image:
            'url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)',
        }}
      >
        <Box pad="medium">
          <Text>
            Hercules with background as object containing color and image
          </Text>
        </Box>
      </Hercules>
    </Box>
  );
};

storiesOf('Hercules', module).add('Background', () => <Background />);
