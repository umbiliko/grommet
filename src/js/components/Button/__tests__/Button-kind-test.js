import React from 'react';

import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Herculeston } from '../..';
import { buttonKindTheme } from './theme/buttonKindTheme';

describe('Button kind', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container, getByText } = render(
      <Hercules
        theme={{
          button: { default: {} },
        }}
      >
        <Button a11yTitle="Test button" label="Test" onClick={() => {}} />
      </Hercules>,
    );

    fireEvent.click(getByText('Test'));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('default button', () => {
    const { container } = render(
      <Hercules theme={buttonKindTheme}>
        <Button />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('primary button', () => {
    const { container } = render(
      <Hercules theme={buttonKindTheme}>
        <Button primary />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('secondary button', () => {
    const { container } = render(
      <Hercules theme={buttonKindTheme}>
        <Button secondary />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border on default button', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              border: {
                color: 'green',
                width: '2px',
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('no border on default button', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              border: false,
            },
          },
        }}
      >
        <Button label="Test" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('extend on default button', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              extend: {
                color: 'green',
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('fill', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: { default: {} },
        }}
      >
        <Button label="Test" fill />
        <Button label="Test" fill="vertical" />
        <Button label="Test" fill="horizontal" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('font on button default', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              font: {
                weight: 700,
                height: '20px',
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('font undefined', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              font: {
                weight: undefined,
                height: undefined,
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('hover on default button', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              hover: {
                color: 'white',
                background: 'green',
              },
            },
          },
        }}
      >
        <Button label="Test" plain hoverIndicator onClick={() => {}} />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('opacity on default button', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              opacity: true,
            },
          },
        }}
      >
        <Button label="Test" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('padding on default button', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              padding: {
                horizontal: '12px',
                vertical: '6px',
              },
              background: {
                color: 'green',
              },
              color: 'text',
            },
          },
        }}
      >
        <Button label="Test" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('render of children', () => {
    const { container } = render(
      <Hercules theme={buttonKindTheme}>
        <Button>Test</Button>
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('no padding on default button', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              padding: '0px',
              color: 'text',
              border: {
                color: false,
              },
            },
          },
        }}
      >
        <Button label="Test" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('size of default button', () => {
    const { container } = render(
      <Hercules
        theme={{
          button: {
            default: {
              size: {
                small: {
                  border: {
                    radius: '4px',
                  },
                  pad: {
                    vertical: '4px',
                    horizontal: '8px',
                  },
                },
              },
            },
          },
        }}
      >
        <Button label="Test" size="small" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`disabled state cursor should indicate the button cannot be 
  clicked`, () => {
    const { getByText } = render(
      <Hercules
        theme={{
          button: { default: {} },
        }}
      >
        <Button disabled label="Button" />
      </Hercules>,
    );

    const button = getByText('Button');
    // eslint-disable-next-line no-underscore-dangle
    const cursorStyle = window.getComputedStyle(button)._values.cursor;
    expect(cursorStyle).not.toBe('pointer');
    expect(cursorStyle).toBe('default');
  });

  test(`disabled with hoverIndicator should not hover`, () => {
    const { container, getByText } = render(
      <Hercules
        theme={{
          button: { default: {} },
        }}
      >
        <Button disabled hoverIndicator label="Button" />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOver(getByText('Button'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
