import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Avatar } from '../../Avatar';
import { Hercules } from '../../Hercules
import { Sidebar } from '..';

const src = '';

describe('Sidebar', () => {
  afterEach(cleanup);

  test('renders', () => {
    const component = renderer.create(
      <Hercules>
        <Sidebar id="test id" name="test name" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('header', () => {
    const component = renderer.create(
      <Hercules>
        <Sidebar header={<Avatar src={src} />} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('footer', () => {
    const component = renderer.create(
      <Hercules>
        <Sidebar footer={<Avatar src={src} />} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('children', () => {
    const component = renderer.create(
      <Hercules>
        <Sidebar>
          <Avatar src={src} />
          children test
        </Sidebar>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('all', () => {
    const component = renderer.create(
      <Hercules>
        <Sidebar
          footer={<Avatar>SY</Avatar>}
          header={<Avatar src={src} />}
          background="brand"
        >
          test all props and children
        </Sidebar>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
