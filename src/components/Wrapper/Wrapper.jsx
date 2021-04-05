import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FunkoState } from '../../context/Funko';

import Funko from '../Funko/Funko';
import Navbar from '../Navbar/Navbar';
import BoxContainer from './BoxContainer';

import classes from './Wrapper.module.scss';

function Wrapper() {
  return (
    <FunkoState>
      <Router>
        <div className={classes['Wrapper']}>
          <Navbar />

          <main className={classes['Wrapper-box-container']}>
            <Switch>
              <Route exact path='/'>
                <BoxContainer />
              </Route>

              <Route exact path='/:id'>
                <Funko />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </FunkoState>
  );
}

export default Wrapper;
