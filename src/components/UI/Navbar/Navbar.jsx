import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import classes from './Navbar.module.scss';
import { useContext } from 'react';
import ProductContext from '../../../context/productsContext';

function Navbar() {
  const { cart } = useContext(ProductContext);

  const cartItemCount = cart.length;

  return (
    <AppBar position='static'>
      <Container disableGutters>
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
            React Firebase Store
          </Typography>

          <Link className={classes['NavLink']} to='/'>
            <Button color='inherit'>Shop</Button>
          </Link>
          <Link className={classes['NavLink']} to='/cart'>
            <Button color='inherit'>Cart ({cartItemCount})</Button>
          </Link>
          <Link className={classes['NavLink']} to='/admin'>
            <Button color='inherit'>Admin</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
