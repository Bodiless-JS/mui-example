// Copied from https://mui.com/material-ui/react-card/#ImgMediaCard.tsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { asBodilessImage, Editable } from '@bodiless/components';
import { withNode } from '@bodiless/data';

// Create an editable version of MUI Card.
const CardMedia = asBodilessImage()(
  ({ src, ...rest }: any) => (
    <MuiCardMedia
      {...rest}
      component="img"
      image={src}
    />
  )
);

function EditableCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        height="140"
        nodeKey="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Editable nodeKey="title">Title</Editable>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Editable nodeKey="body">
            Body
          </Editable>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Editable nodeKey="button-1">CTA</Editable></Button>
        <Button size="small"><Editable nodeKey="button-2">Secondary CTA</Editable></Button>
      </CardActions>
    </Card>
  );
}

export default withNode(EditableCard);
