import type { GridPaginationModel } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import type { DatatableProps } from './types';
import { rowsPerPageOptions } from './types';
import { useState } from 'react';
import { getBorderColor } from '@/theme/helper';

export default function Datatable<T>({
  cols,
  rows,
  rowCount,
  id,
  withRowSelectOptions = true,
  sx,
  onServerSideParamsChange,
  ...rest
}: DatatableProps<T>) {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState<rowsPerPageOptions>(rowsPerPageOptions.option_1);

  const handlePageSizeChange = (model: GridPaginationModel) => {
    setPage(model.page);
    setPageSize(model.pageSize);
    onServerSideParamsChange(page, pageSize);
  };

  let options = [];
  if (withRowSelectOptions) {
    options = [rowsPerPageOptions.option_1, rowsPerPageOptions.option_2, rowsPerPageOptions.option_3];
  } else {
    options = [rowsPerPageOptions.option_1];
  }

  return (
    <DataGrid
      density={'comfortable'}
      autoHeight={true}
      columnHeaderHeight={29}
      showCellVerticalBorder={false}
      showColumnVerticalBorder={false}
      sx={{
        border: 'none',
        borderRadius: '0px 0px 25px 25px',
        background: (theme) => `${theme.palette.background.paper}`,

        '& .MuiDataGrid-columnHeaders': {
          borderBottom: (theme) => `1px solid ${getBorderColor(theme)}`,
          borderRadius: '0px',
        },
        '& .MuiDataGrid-columnSeparator.MuiDataGrid-columnSeparator--sideRight': {
          display: 'none',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold',
        },
        '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
          outline: 'none !important',
        },
        '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
          outline: 'none !important',
        },
        ...sx,
      }}
      rows={rows}
      rowCount={rowCount}
      columns={cols}
      getRowId={(row) => row[id]}
      disableColumnSelector={true}
      disableColumnFilter={true}
      sortingMode="server"
      paginationMode="server"
      disableRowSelectionOnClick={true}
      onPaginationModelChange={handlePageSizeChange}
      pageSizeOptions={options}
      {...rest}
    />
  );
}
