import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import classes from './Admin.module.scss';
import { useContext, useState } from 'react';
import ProductContext from '../../../context/productsContext';

function Admin() {
  const { addProduct } = useContext(ProductContext);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const [adding, setAdding] = useState(false);

  const [showSucces, setShowSuccess] = useState(false);

  const handleSnackbarClose = () => {
    setShowSuccess(false);
  };

  const handleFormSubmit = async (e) => {
    if (adding) return;

    setAdding(true);

    e.preventDefault();

    const product = {
      name,
      price,
      stock,
      image: 'https://picsum.photos/id/1/300/200',
    };

    await addProduct(product);

    setShowSuccess(true);

    setName('');
    setPrice('');
    setStock('');

    setAdding(false);
  };

  return (
    <Container>
      <Typography gutterBottom variant='h3' component='h2'>
        Add a Product
      </Typography>

      <Grid container spacing={8}>
        <Grid item xs={7}>
          <form
            autoComplete='off'
            className={classes['Add-Product-Form']}
            onSubmit={handleFormSubmit}
          >
            <TextField
              label='Product Name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label='Price'
              type='number'
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label='Stock'
              type='number'
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />

            <Button
              type='submit'
              color='primary'
              variant='contained'
              size='large'
              style={{
                marginTop: '1rem',
                width: '100%',
                fontSize: '1.5em',
              }}
              disabled={adding}
            >
              {adding && (
                <CircularProgress
                  size={30}
                  style={{ color: '#fff', marginRight: '1rem' }}
                />
              )}
              Add Product
            </Button>
          </form>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={showSucces}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message='Product Added Successfully'
      />
    </Container>
  );
}

export default Admin;
