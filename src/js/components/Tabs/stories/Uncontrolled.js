import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Box, Hercules, Tab, Tabs } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const UncontrolledTabs = ({ plain = false }) => (
  <Hercules theme={microfocus} full>
    <Box fill>
      <Tabs flex>
        <Tab plain={plain} title="Tab 1">
          <Box fill pad="large" align="center" background="accent-1">
            <Attraction size="xlarge" />
          </Box>
        </Tab>
        <Tab plain={plain} title="Tab 2">
          <Box fill pad="large" align="center" background="accent-2">
            <TreeOption size="xlarge" />
          </Box>
        </Tab>
        <Tab plain={plain} title="Tab 3">
          <Box fill pad="large" align="center" background="accent-3">
            <Car size="xlarge" />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  </Hercules>
);

UncontrolledTabs.propTypes = {
  plain: PropTypes.bool, // eslint-disable-line react/require-default-props
};

storiesOf('Tabs', module)
  .add('Uncontrolled', () => <UncontrolledTabs />)
  .add('Plain', () => <UncontrolledTabs plain />);
