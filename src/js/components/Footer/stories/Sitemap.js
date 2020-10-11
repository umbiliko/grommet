import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet as GrommetIcon } from 'grommet-icons';
import { Anchor, Box, Footer, microfocus, Hercules, Main, Text } from 'hercules-theme';
import { threeColumns as data } from './data';

const FooterAnchor = ({ ...rest }) => (
  <Anchor href="/" size="small" color="white" {...rest} />
);

const FooterContent = () => {
  return data.map(item => (
    <Box gap="medium" key={item[0]}>
      <Text weight="bold" size="small">
        {item[0]}
      </Text>
      <Box>
        {[1, 2, 3].map(i => (
          <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
        ))}
      </Box>
    </Box>
  ));
};

const Sitemap = () => {
  return (
    <Hercules theme={microfocus}>
      <Main
        background="light-4"
        elevation="large"
        pad="large"
        gap="large"
        border
      >
        <Text margin="small" size="xsmall">
          Main Content
        </Text>
        <Box flex />
      </Main>
      <Footer background="dark-1" pad="large">
        <Box direction="row-responsive" gap="xsmall">
          <Box align="center" gap="small">
            <GrommetIcon color="brand" size="large" />
            <Text alignSelf="center" color="brand" weight="bold">
              grommet.io
            </Text>
          </Box>
        </Box>
        <FooterContent />
      </Footer>
    </Hercules>
  );
};

storiesOf('Footer', module).add('Sitemap', () => <Sitemap />);
