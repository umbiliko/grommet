import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, render } from '@testing-library/react';
import { Alert, StatusInfo } from 'grommet-icons';
import { Hercules } from '../../Hercules';
import { Form } from '../../Form';
import { FormField } from '..';
import { TextInput } from '../../TextInput';

const CustomFormField = styled(FormField)`
  font-size: 40px;
`;

describe('FormField', () => {
  afterEach(cleanup);

  test(`should have no accessibility violations`, async () => {
    const { container } = render(
      <Hercules>
        <FormField />
      </Hercules>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('default', () => {
    const component = renderer.create(
      <Hercules>
        <FormField />
        <FormField>
          <TextInput />
        </FormField>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('label', () => {
    const component = renderer.create(
      <Hercules>
        <FormField label="test label" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('help', () => {
    const component = renderer.create(
      <Hercules>
        <FormField help="test help" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('error', () => {
    const component = renderer.create(
      <Hercules>
        <FormField error="test error" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('info', () => {
    const component = renderer.create(
      <Hercules>
        <FormField info="test info" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('htmlFor', () => {
    const component = renderer.create(
      <Hercules>
        <FormField htmlFor="test-id" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('margin', () => {
    const component = renderer.create(
      <Hercules>
        <FormField margin="medium" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('empty margin', () => {
    const component = renderer.create(
      <Hercules>
        <FormField margin="none" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('pad', () => {
    const component = renderer.create(
      <Hercules>
        <FormField pad />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('abut', () => {
    const component = renderer.create(
      <Hercules
        theme={{
          formField: {
            border: {
              color: 'border',
              error: {
                color: {
                  dark: 'white',
                  light: 'status-critical',
                },
              },
              size: 'large',
              position: 'outer',
              side: 'all',
            },
            margin: { bottom: 'small' },
          },
        }}
      >
        <FormField htmlFor="test-id" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('abut with margin', () => {
    const component = renderer.create(
      <Hercules
        theme={{
          formField: {
            border: {
              color: 'border',
              error: {
                color: {
                  dark: 'white',
                  light: 'status-critical',
                },
              },
              size: 'large',
              position: 'outer',
              side: 'all',
            },
            margin: { bottom: 'small' },
          },
        }}
      >
        <FormField margin="medium" htmlFor="test-id" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom formfield', () => {
    const component = renderer.create(
      <Hercules>
        <CustomFormField htmlFor="test-id" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled', () => {
    const component = renderer.create(
      <Hercules>
        <FormField disabled /> {/* don't use FormField without Form */}
        <Form>
          <FormField disabled />
        </Form>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('required', () => {
    const component = renderer.create(
      <Hercules>
        <FormField required /> {/* don't use FormField without Form */}
        <Form>
          <FormField required />
        </Form>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom label', () => {
    const component = renderer.create(
      <Hercules
        theme={{
          formField: {
            label: {
              color: 'red',
              size: 'small',
              margin: 'xsmall',
              weight: 600,
            },
          },
        }}
      >
        <Form>
          <FormField label="label" />
        </Form>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled with custom label', () => {
    const component = renderer.create(
      <Hercules
        theme={{
          formField: {
            label: {
              color: 'red',
              size: 'small',
              margin: 'xsmall',
              weight: 600,
            },
            disabled: {
              label: {
                color: 'teal',
              },
            },
          },
        }}
      >
        <Form>
          <FormField disabled label="label" />
        </Form>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('pad with border undefined', () => {
    const component = renderer.create(
      <Hercules
        theme={{
          formField: {
            border: undefined,
            content: {
              pad: 'large',
            },
          },
        }}
      >
        <Form>
          <FormField label="label" pad />
        </Form>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom input margin', () => {
    const component = renderer.create(
      <Hercules
        theme={{
          formField: {
            content: {
              margin: { vertical: 'large' },
            },
          },
        }}
      >
        <Form>
          <FormField label="label" />
        </Form>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('contentProps', () => {
    const component = renderer.create(
      <Hercules>
        <Form>
          <FormField
            label="label"
            contentProps={{
              border: false,
            }}
          />
        </Form>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom error and info icon and container', () => {
    const component = renderer.create(
      <Hercules
        theme={{
          formField: {
            error: {
              icon: <Alert />,
              container: {
                background: {
                  color: 'green',
                },
              },
            },
            info: {
              icon: <StatusInfo />,
              container: {
                pad: { horizontal: 'large' },
              },
            },
          },
        }}
      >
        <Form>
          <FormField
            label="label"
            error="This is an error message."
            info="Here is a little added info on FormField."
            contentProps={{
              border: false,
            }}
          />
        </Form>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
