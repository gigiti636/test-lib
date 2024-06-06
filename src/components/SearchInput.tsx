import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import InputBase from '@mui/material/InputBase';
import type { SxProps } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import type { ChangeEvent } from 'react';
import {
  KeyboardEvent,
  useCallback,
  useDeferredValue,
  useState,
  useTransition,
  DependencyList,
  useEffect,
} from 'react';
import { IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

interface SearchProps {
  flavor?: string;
}
export const Search = styled('div')<SearchProps>(({ theme, flavor = 'contained' }) => ({
  position: 'relative',
  borderRadius: flavor === 'contained' ? '28px' : '11px',
  marginLeft: 0,
  marginRight: 0,
  maxWidth: '450px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  background: flavor === 'contained' ? theme.palette.secondary.main : 'transparent',
  color: grey[800],
  border:
    flavor === 'contained'
      ? `1px solid ${theme.palette.mode === 'dark' ? 'background.paper' : theme.palette.text.disabled} `
      : `1px solid ${theme.palette.primary.main}`,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    width: '100%',
  },
}));

interface Props {
  title?: string;
  onChange: (_value: string) => void;
  onClear?: () => void;
  presetValue?: string;
  sx?: SxProps;
  manualSearch?: boolean;
  clearQuery?: DependencyList;
  flavor?: 'contained' | 'outlined';
}

export default function SearchInput({
  title,
  onChange,
  onClear,
  presetValue,
  sx,
  manualSearch = false,
  clearQuery,
  flavor = 'contained',
}: Props) {
  const [query, setQuery] = useState<string>('');
  const [, startTransition] = useTransition();
  const { t } = useTranslation('common');

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      startTransition(() => {
        setQuery(value);
        if (!manualSearch) {
          onChange(value);
        }
      });
    },
    [onChange, manualSearch],
  );

  const deferredQuery = useDeferredValue<string>(query);

  const handleClear = useCallback(() => {
    startTransition(() => {
      setQuery('');
      if (onClear) {
        onClear();
      } else {
        onChange('');
      }
    });
  }, [onClear, onChange]);

  const handleKeyStroke = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onChange(query);
    }
  };

  useEffect(() => {
    if (clearQuery) {
      setQuery('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, clearQuery);

  useEffect(() => {
    if (query.length % 3 === 0) {
      onChange(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (presetValue) setQuery(presetValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchTitle = title ? title : t('buttons.search');
  return (
    <Search sx={sx} title={searchTitle ? searchTitle : ''} flavor={flavor} aria-label={'search-input'}>
      <StyledInputBase
        onChange={handleSearch}
        placeholder={searchTitle}
        inputProps={{ 'aria-label': 'search' }}
        value={deferredQuery}
        onKeyPress={handleKeyStroke}
      />
      {query.length > 0 && (
        <IconButton onClick={handleClear} color={'inherit'}>
          <ClearIcon sx={{ cursor: 'pointer', color: 'inherit' }} fontSize={'small'} />
        </IconButton>
      )}

      {manualSearch && (
        <SearchIcon
          onClick={() => onChange(query)}
          style={{ paddingRight: 4, marginRight: 5, opacity: query.length > 0 ? 1 : 0.6, cursor: 'pointer' }}
        />
      )}
    </Search>
  );
}
