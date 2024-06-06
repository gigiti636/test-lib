import { MouseEventHandler, ReactNode } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  anchor?: 'left' | 'right';
  closeDrawer?: MouseEventHandler;
  onClose: MouseEventHandler;
  children: ReactNode;
}

function MyDrawer({ open, anchor = 'right', closeDrawer, onClose, children }: Props) {
  const styleOuter: SxProps<Theme> = {
    boxShadow: 24,
  };

  const styleInner: SxProps<Theme> = {
    width: '300px',
    p: 2,
    overflow: 'auto',
    outline: 'none',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
  };

  return (
    <Drawer anchor={anchor} open={open} sx={styleOuter} onClose={onClose}>
      <Box sx={styleInner}>
        {closeDrawer && (
          <div
            style={{
              position: 'relative',
              cursor: 'pointer',
              marginBottom: 25,
            }}
          >
            <CloseIcon onClick={closeDrawer} />
          </div>
        )}
        {children}
      </Box>
    </Drawer>
  );
}

export default MyDrawer;
