import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProductDialog from '../ProductDialog/ProductDialog';

function ProductCard({ product }) {
  const { name, image, stock, price } = product;
  const [open, setOpen] = useState(false);

  return (
    <>
      <ProductDialog
        open={open}
        onClose={() => setOpen(false)}
        product={product}
      />
      <Card onClick={() => setOpen(true)}>
        <CardActionArea>
          <CardMedia image={image} style={{ height: 200 }} />
          <CardContent>
            <Typography variant='h5' component='h2'>
              {name}
            </Typography>

            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <Typography
                variant='body2'
                color='textSecondary'
                style={{ color: stock <= 10 ? '#e53935' : '#3949ab' }}
              >
                {stock} available
              </Typography>
              <Typography variant='body1' align='right'>
                ${price}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default ProductCard;
