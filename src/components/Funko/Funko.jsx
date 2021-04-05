import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import FunkoContext from '../../context/Funko';
import Box from '../Box/Box';
import classes from './Funko.module.scss';

function Funko() {
  const { funkos } = useContext(FunkoContext);
  const { id } = useParams();

  const funko = funkos.find((f) => f.id === id);

  return (
    <div className={classes['Funko']}>
      <Link to='/' className={classes['Funko-backlink']}>
        Go Back
      </Link>

      <Box {...funko} />
    </div>
  );
}

export default Funko;
