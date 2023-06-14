import React from 'react';
import { HOC } from '@bodiless/fclasses';
import type { SxProps } from '@mui/material';

export const withSx = (newSx: SxProps<any>): HOC<{ sx?: SxProps<any>}> => Component => props => {
  const { sx: incomingSx = {}, ...rest } = props;
  const sx = {
    ...newSx,
    ...incomingSx,
  };
  return <Component {...rest as any} sx={sx} />;
};
