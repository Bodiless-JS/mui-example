import { Box } from '@mui/material';
import { addProps, on } from '@bodiless/fclasses';
import { asMuiCardToken } from '../MuiCardClean';
import type { MuiExampleMuiCard } from '../types';
import { withSx } from '../util';

const Default = asMuiCardToken({
  Layout: {
    Title: addProps({ component: 'div', gutterBottom: true }),
  },
  Theme: {
    Title: addProps({ variant: 'h5' }),
    Body: addProps({ variant: 'body2', color: 'text.secondary' }),
  },
  Spacing: {
    CardMedia: addProps({ height: '140' }),
    CTA: addProps({ size: 'small' }),
    SecondaryCTA: addProps({ size: 'small' }),
  },
});

const WithHorizontal = asMuiCardToken({
  Components: {
    ContentColumn: on(Box)(),
  },
  Layout: {
    Card: withSx({ display: 'flex', flexDirection: 'row-reverse' }),
    CardMedia: withSx({ width: '50%' }),
    ContentColumn: withSx({ width: '50%' }),
  },
});

const WithLizardContent = asMuiCardToken({
  Content: {
    CardMediaContent: addProps({
      alt: 'green iguana',
      src: '/images/contemplative-reptile.jpeg',
    }),
    TitleContent: addProps({ children: 'Lizard' }),
    BodyContent: addProps({
      children:
      `
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      `
    }),
    CTAContent: addProps({ children: 'Share' }),
    SecondaryCTAContent: addProps({ children: 'Learn More' }),
  },
});

/**
 * Tokens for MuiCardClean
 *
 * @category Token Collection
 * @see [[MuiExampleMuiCard]]
 * @see [[MuiCardClean]]
 */
const muiExampleMuiCard: MuiExampleMuiCard = {
  Default,
  WithLizardContent,
  WithHorizontal
  // ...
};

export default muiExampleMuiCard;
