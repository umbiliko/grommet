import React from 'react';
import { storiesOf } from '@storybook/react';
import { User } from 'grommet-icons';
import { Box, Button, microfocus, Hercules, Heading, Text } from 'hercules-theme';

const darks = [false, true];
const kinds = [
  { name: 'default', props: {} },
  { name: 'primary', props: { primary: true } },
  { name: 'secondary', props: { secondary: true } },
];
const states = [
  {},
  { active: true },
  { disabled: true },
  { color: 'teal' },
  { color: '#9999ff' },
  { color: '#333399' },
  { hoverIndicator: 'teal' },
];
const contents = [
  { icon: <User /> },
  { label: 'label' },
  { icon: <User />, label: 'label' },
  {
    plain: true,
    children: (
      <Box pad="xsmall">
        <Text color="orange">label</Text>
      </Box>
    ),
  },
];

const Example = () => (
  <Box pad="large" gap="large">
    <Hercules theme={microfocus}>
      <Box gap="medium">
        {kinds.map(kind => (
          <Box key={kind.name} flex={false}>
            <Heading level={3} size="small">
              {kind.name}
            </Heading>
            {states.map((state, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={index} direction="row" align="center">
                {darks.map(dark => (
                  <Box
                    key={dark}
                    direction={dark ? 'row-reverse' : 'row'}
                    align="center"
                    gap="small"
                    background={{ color: 'background', dark }}
                    pad="small"
                  >
                    {contents.map((content, index2) => (
                      <Button
                        // eslint-disable-next-line react/no-array-index-key
                        key={index2}
                        {...kind.props}
                        {...content}
                        {...state}
                      />
                    ))}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Hercules>
  </Box>
);

storiesOf('Button', module).add('Kind', () => <Example />);
