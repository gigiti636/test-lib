import { Theme } from '@mui/material/styles';

export declare const getCommonCarouselStyles: (theme: Theme) => {
    '.react-multiple-carousel__arrow': {
        background: string;
        minWidth: string;
        minHeight: string;
    };
    '.react-multiple-carousel__arrow--right:before': {
        color: "#fb8c00";
    };
    '.react-multiple-carousel__arrow--left:before': {
        color: "#fb8c00";
    };
    '.react-multi-carousel-dot button': {
        background: "#ffcc80";
        border: string;
    };
    '.react-multi-carousel-dot--active button': {
        background: "#fb8c00";
        border: string;
    };
};
export declare const getSecondaryBgColor: (theme: Theme) => string;
export declare const getBorderColor: (theme: Theme) => "rgba(179 ,168, 168 , 0.8)" | "rgba(0, 0, 0, 0.30)";
