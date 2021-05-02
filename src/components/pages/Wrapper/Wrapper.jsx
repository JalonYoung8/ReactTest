import { Route, Switch } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import Admin from '../Admin/Admin';

function Wrapper() {
  return (
    <Box component='main' style={{ padding: '1.5rem' }}>
      <Switch>
        <Route exact path='/'>
          <Shop />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </Box>
  );
}

export default Wrapper;
