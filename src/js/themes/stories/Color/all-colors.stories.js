import { storiesOf } from '@storybook/react';
import { Accordion, AccordionPanel, Box, Grid, Heading, Hercules, Text } from 'hercules-theme/components';
import React, { Fragment, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { microfocus} from 'hercules-theme/themes';

const ColorGridPanel = ({ colors, title }) => (
  <AccordionPanel label={title}>
    <Box align="stretch" pad="small">
      <Grid columns={{ count: 4, size: 'auto' }} gap="small">
        {Object.entries(colors || {}).map(([name, color], index) => {
          return (
            <Box align="center" pad="small" background={color} key={`${name}-${index}`}>
              <Heading level={4}>{name}</Heading>
              {typeof color === 'string'
                ? (<Text>{color}</Text>)
                : (
                  <Grid columns={{ count: 2, size: 'auto' }} gap="small">
                    {!color
                      ? (
                        <>
                          <Text>Value Type:</Text>
                          <Text>{typeof color}</Text>
                        </>
                      )
                      : Object.entries(color || {}).map(([key, val]) => (
                        <Fragment key={`${name}-${key}-name`}>
                          <Text>{key}:</Text>
                          <Text>{val}</Text>
                        </Fragment>
                      ))
                    }
                  </Grid>
                )
              }
            </Box>
          );
        })}
      </Grid>
    </Box>
  </AccordionPanel>
);

const filteredColors = (colors, prefix) =>
  Object.entries(colors).filter(([key]) => key.startsWith(prefix)).reduce((acc, [key, val]) => Object.assign(acc, { [key]: val }), {});

const AllColors = () => {
  const { global: { colors } } = useContext(ThemeContext);
  return (
    <Box fill>
      <Accordion animate multiple>
        <ColorGridPanel colors={{ brand: colors.brand, background: colors.background }} title="Main Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'status-')} title="Status Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'accent-')} title="Accent Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'light-')} title="Light Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'dark-')} title="Dark Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'neutral-')} title="Neutral Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'highlight-')} title="Highlight Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'shade-')} title="Shade Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'statushighlight-')} title="Status Light Colors" />
        <ColorGridPanel colors={filteredColors(colors, 'statusshade-')} title="Status Shade Colors" />
        <ColorGridPanel colors={colors} title="All Colors" />
      </Accordion>
    </Box>
  );
};

storiesOf('Quantum/Color', module)
  .add('All', () => 
    <Hercules fill theme={microfocus} themeMode={'dark'} style={{ flex: '1 1' }}>
      <AllColors />
    </Hercules>
  );
