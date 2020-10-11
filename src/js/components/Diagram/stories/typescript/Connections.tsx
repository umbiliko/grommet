import React from 'react';
import { storiesOf } from '@storybook/react';

import { Gremlin, IceCream } from 'grommet-icons';
import { Stack, microfocus, Hercules, Box, Diagram } from 'hercules-theme';

import { DiagramConnectionAnchor, DiagramConnectionType } from '../../index';

// Type annotations can only be used in TyoeScript files.
// Remove ':DiagramConnection...' if not using TypeScript.
const anchor: DiagramConnectionAnchor = 'horizontal';
const type: DiagramConnectionType = 'curved';

const connection = {
  id: 'shimi',
  anchor,
  color: 'accent-1',
  thickness: 'xsmall',
  type,
  toTarget: 'yummy',
  fromTarget: 'gremlin',
  round: true,
};

const connections = [connection];

const Connections = () => {
  return (
    <Hercules theme={microfocus}>
      <Stack>
        <Box fill pad="xlarge">
          <Box align="start">
            <Gremlin id="gremlin" color="neutral-2" size="xlarge" />
          </Box>
          <Box align="end" pad={{ vertical: 'large' }}>
            <IceCream id="yummy" color="neutral-2" size="xlarge" />
          </Box>
        </Box>
        <Diagram connections={connections} />
      </Stack>
    </Hercules>
  );
};

storiesOf('Diagram', module).add('Connections', () => <Connections />);
