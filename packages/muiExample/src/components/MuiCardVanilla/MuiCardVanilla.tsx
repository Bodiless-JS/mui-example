// Copied from https://mui.com/material-ui/react-card/#ImgMediaCard.tsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ImgMediaCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/contemplative-reptile.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export function MuiCardVanillaHorizontal() {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/contemplative-reptile.jpeg"
        sx={{ width: '50%' }}
      />
      <Box sx={{ width: '50%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
