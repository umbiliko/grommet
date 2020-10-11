import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Favorite } from 'grommet-icons';
import { Box } from '../../Box';
import { Hercules } from '../../Hercules';
import { Stack } from '../../Stack';
import { Text } from '../../Text';
import { Avatar } from '..';

const src = '';

describe('Avatar', () => {
  afterEach(cleanup);

  test('renders', () => {
    const component = renderer.create(
      <Hercules>
        <Avatar />
        <Avatar id="test id" name="test name" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('size renders', () => {
    const component = renderer.create(
      <Hercules>
        <Avatar size="xsmall" src={src} />
        <Avatar size="small" src={src} />
        <Avatar src={src} />
        <Avatar size="large" src={src} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('round renders', () => {
    const component = renderer.create(
      <Hercules>
        <Avatar src={src} round={false} />
        <Avatar src={src} round="xsmall" />
        <Avatar src={src} round="small" />
        <Avatar src={src} round="medium" />
        <Avatar src={src} round="large" />
        <Avatar src={src} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('text renders', () => {
    const component = renderer.create(
      <Hercules>
        <Avatar background="dark-2">
          <Text alignSelf="center" size="xlarge">
            R
          </Text>
        </Avatar>
        <Avatar background="brand">
          <Text alignSelf="center" size="xlarge">
            SY
          </Text>
        </Avatar>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('icon renders', () => {
    const component = renderer.create(
      <Hercules>
        <Avatar src={<Favorite color="accent-2" />} background="accent-4" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('stack renders', () => {
    const component = renderer.create(
      <Hercules>
        <Stack anchor="bottom-right">
          <Box>
            <Box direction="row">
              <Avatar size="xsmall" src={src} />
              <Box pad="xxsmall" />
            </Box>
            <Box pad="xxsmall" />
          </Box>
          <Avatar src={src} size="42px" />
        </Stack>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('text size changes according to theme', () => {
    const theme = {
      avatar: {
        text: {
          size: {
            small: '30px',
            large: 'small',
            '50px': '10px',
          },
        },
      },
    };

    const component = renderer.create(
      <Hercules theme={theme}>
        <Box>
          <Avatar>T1</Avatar>
          <Avatar size="small">T2</Avatar>
          <Avatar size="large">T3</Avatar>
          <Avatar size="50px">T4</Avatar>
        </Box>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
