import React from 'react';
import { Page } from '@bodiless/next';
import Box from '@mui/material/Box';
import { MuiCardEditable } from 'muiExample';


export default props => (
  <Page {...props}>
    <Box sx={{ maxWidth: '42rem', margin: 'auto' }}>
      <MuiCardEditable nodeKey="editable" />
    </Box>
  </Page>
);