import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';
import ProductContext from '../../../context/productsContext';

function ProductDialog({ open, onClose, product }) {
  const { name, image, stock, price } = product;

  const { addProductToCart } = useContext(ProductContext);

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle>Product Details</DialogTitle>

      <DialogContent>
        <img
          src={image}
          alt='product'
          style={{ width: '100%', borderRadius: 4, marginBottom: '.5rem' }}
        />

        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h4' component='h2'>
            {name}
          </Typography>

          <Typography variant='h4' align='right'>
            ${price}
          </Typography>
        </Box>
        <Typography
          variant='body1'
          color='textSecondary'
          style={{ color: stock <= 10 ? '#e53935' : '#3949ab' }}
        >
          {stock} available
        </Typography>
      </DialogContent>

      <DialogActions style={{ margin: '.5rem 0' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          color='primary'
          variant='contained'
          disabled={stock <= 0}
          onClick={() => {
            addProductToCart(product);
            onClose();
          }}
        >
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDialog;
