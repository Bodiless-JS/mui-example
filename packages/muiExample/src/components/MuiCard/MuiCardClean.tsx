import React, { FC, Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { designable } from '@bodiless/fclasses';
import type { DesignableComponentsProps } from '@bodiless/fclasses';
import type { MuiCardComponents } from './types';

type MuiCardBaseProps = DesignableComponentsProps<MuiCardComponents>;

/**
 * The starting components for each slot.
 */
const muiCardComponents: MuiCardComponents = {
  Card,
  CardContent,
  CardMedia,
  CardMediaContent: 'img',
  ContentColumn: Fragment,
  Title: Typography,
  TitleContent: Fragment,
  Body: Typography,
  BodyContent: Fragment,
  CardActions,
  CTA: Button,
  CTAContent: Fragment,
  SecondaryCTA: Button,
  SecondaryCTAContent: Fragment,
};

const MuiCardBase: FC<MuiCardBaseProps> = ({ components: C, ...rest }) => (
  <C.Card {...rest}>
    <C.CardMedia>
      <C.CardMediaContent />
    </C.CardMedia>
    <C.ContentColumn>
      <C.CardContent>
        <C.Title>
          <C.TitleContent />
        </C.Title>
        <C.Body>
          <C.BodyContent />
        </C.Body>
      </C.CardContent>
      <C.CardActions>
        <C.CTA>
          <C.CTAContent />
        </C.CTA>
        <C.SecondaryCTA>
          <C.SecondaryCTAContent />
        </C.SecondaryCTA>
      </C.CardActions>
    </C.ContentColumn>
  </C.Card>
);

const MuiCardClean = designable(muiCardComponents, 'MuiCard')(MuiCardBase);

/**
 * A token creator that respects the MuiCard slots.
 *
 * @category Token Collection
 */
export const asMuiCardToken = asVitalTokenSpec<MuiCardComponents>();

export default MuiCardClean;
