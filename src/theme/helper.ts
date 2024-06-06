import { orange } from '@mui/material/colors';
import type { Theme } from '@mui/material/styles';

export const getCommonCarouselStyles = (theme: Theme) => ({
  '.react-multiple-carousel__arrow': {
    background: `rgba(130, 130, 130,${theme.palette.mode === 'dark' ? 0.5 : 0.1})`,
    minWidth: '20px',
    minHeight: '20px',
  },
  '.react-multiple-carousel__arrow--right:before': { color: orange[600] },
  '.react-multiple-carousel__arrow--left:before': { color: orange[600] },
  '.react-multi-carousel-dot button': { background: orange[200], border: 'none' },
  '.react-multi-carousel-dot--active button': { background: orange[600], border: 'none' },
});

export const getSecondaryBgColor = (theme: Theme): string => {
  return theme.palette.mode === 'dark' ? '#353535' : '#EEEFF0';
};

export const getBorderColor = (theme: Theme) =>
  theme.palette.mode === 'dark' ? `rgba(179 ,168, 168 , 0.8)` : `rgba(0, 0, 0, 0.30)`;
