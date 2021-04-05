import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FunkoContext from '../../context/Funko';
import Box from '../Box/Box';

import classes from './Wrapper.module.scss';

function BoxContainer() {
  const { funkos } = useContext(FunkoContext);

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('cat');

  return (
    <>
      {funkos.map((funko) => {
        if (category) {
          return (
            funko.category === category && (
              <Link
                key={funko.id}
                className={classes['Wrapper-box-link']}
                to={`/${funko.id}`}
              >
                <Box {...funko} key={funko.name} />
              </Link>
            )
          );
        } else {
          return (
            <Link
              key={funko.id}
              className={classes['Wrapper-box-link']}
              to={`/${funko.id}`}
            >
              <Box {...funko} key={funko.name} />
            </Link>
          );
        }
      })}
    </>
  );
}

export default BoxContainer;
