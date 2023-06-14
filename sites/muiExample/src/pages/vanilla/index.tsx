import React from 'react';
import Box from '@mui/material/Box';

import {
  MuiCardVanilla, MuiCardVanillaHorizontal, MuiCardClean, muiExampleMuiCard,
} from 'muiExample';
import { as } from '@bodiless/fclasses';

const { Default, WithLizardContent, WithHorizontal } = muiExampleMuiCard;
const LizardCard = as(Default, WithLizardContent)(MuiCardClean);
const LizardCardHorizontal = as(WithHorizontal)(LizardCard);

export default () => (
  <Box sx={{ maxWidth: '42rem', margin: 'auto' }}>
    <Box sx={{ maxWidth: 345, paddingY: 20 }}>
      <MuiCardVanilla />
    </Box>
    <Box>
      <MuiCardVanillaHorizontal />
    </Box>
    <Box sx={{ maxWidth: 345, paddingY: 20 }}>
      <LizardCard />
    </Box>
    <Box sx={{ paddingBottom: 100 }}>
      <LizardCardHorizontal />
    </Box>
  </Box>
);
