import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeleteIcon from '@material-ui/icons/Delete';
import { useContext } from 'react';
import ProductContext from '../../../context/productsContext';
import { useHistory } from 'react-router';

function Cart() {
  const { cart, removeProductFromCart, emptyCart } = useContext(ProductContext);
  const history = useHistory();

  return (
    <Container>
      <Typography gutterBottom variant='h3' component='h2'>
        Cart
      </Typography>

      <Grid container spacing={8}>
        <Grid item xs={7}>
          {cart.length !== 0 ? (
            <List>
              {cart.map(({ id, image, name, price, stock }, i) => (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <img
                        src={image}
                        alt='product'
                        style={{ height: 70, borderRadius: 4 }}
                      />
                    </ListItemAvatar>
                    <ListItemText style={{ margin: '0 1.5rem' }}>
                      <Box
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant='h6' style={{ fontWeight: 'normal' }}>
                          {name}
                        </Typography>

                        {stock < 10 && (
                          <Typography
                            variant='subtitle1'
                            color='textSecondary'
                            style={{ fontWeight: 'normal' }}
                          >
                            Low Stock!!!
                          </Typography>
                        )}

                        <Typography variant='h6' style={{ fontWeight: 'normal' }}>
                          ${price}
                        </Typography>
                      </Box>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton
                        edge='end'
                        onClick={() => removeProductFromCart(id)}
                      >
                        <DeleteIcon style={{ color: '#e53935' }} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  {i + 1 !== cart.length && (
                    <Divider style={{ marginBottom: '.3rem' }} />
                  )}
                </>
              ))}
            </List>
          ) : (
            <Typography
              variant='subtitle1'
              color='textSecondary'
              align='center'
              style={{
                fontSize: '2em',
                opacity: 0.6,
              }}
            >
              Nothing in Cart
            </Typography>
          )}
        </Grid>
        <Grid item xs={5} style={{ textAlign: 'right', paddingTop: '3rem' }}>
          <Typography gutterBottom variant='h3'>
            Total Cost: $
            {cart.reduce((totalPrice, product) => totalPrice + +product.price, 0)}
          </Typography>
          <Button
            color='primary'
            variant='contained'
            size='large'
            disabled={cart.length <= 0}
            style={{
              width: '100%',
              fontSize: '2em',
            }}
            onClick={() => {
              alert('All items Purchased');
              emptyCart();
              history.push('/');
            }}
          >
            Purchase
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
