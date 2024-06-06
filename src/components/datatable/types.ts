import type { DataGridProps, GridColDef } from '@mui/x-data-grid';
import type { SxProps } from '@mui/material/styles';

export interface DatatableProps<T> extends Partial<DataGridProps> {
  cols: GridColDef[];
  rows: T[];
  id: string | number;
  rowCount: number;
  withRowSelectOptions?: boolean;
  sx?: SxProps;
  onServerSideParamsChange: (_page: number, _pageSize: rowsPerPageOptions) => void;
}

// eslint-disable-next-line no-unused-vars
export enum rowsPerPageOptions {
  // eslint-disable-next-line no-unused-vars
  option_1 = 30,
  // eslint-disable-next-line no-unused-vars
  option_2 = 60,
  // eslint-disable-next-line no-unused-vars
  option_3 = 100,
}

export type SortingType = '' | 'asc' | 'desc';
export interface OrderDetails {
  column: string;
  type: SortingType;
}

export interface QueryParams {
  page: number;
  pageSize: rowsPerPageOptions;
  column: string;
  type: SortingType;
}

export enum OrderType {
  // eslint-disable-next-line no-unused-vars
  default = 'default',
  // eslint-disable-next-line no-unused-vars
  asc = 'asc',
  // eslint-disable-next-line no-unused-vars
  desc = 'desc',
}
