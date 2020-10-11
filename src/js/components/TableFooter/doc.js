import { describe } from 'react-desc';

export const doc = TableFooter => {
  const DocumentedTableFooter = describe(TableFooter)
    .description('The footer of a table.')
    .usage(
      `import { TableFooter } from 'hercules-theme';
<TableFooter />`,
    )
    .intrinsicElement('tfoot');

  return DocumentedTableFooter;
};
