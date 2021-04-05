import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FunkoContext from '../../context/Funko';
import classes from './Navbar.module.scss';

function Navbar() {
  const { funkos } = useContext(FunkoContext);

  const categories = [...new Set(funkos.map((funko) => funko.category))];

  return (
    <header className={classes['Navbar']}>
      <Link to='/' className={classes['Navbar-link']}>
        All
      </Link>

      {categories.map((cat) => (
        <Link key={cat} to={`/?cat=${cat}`} className={classes['Navbar-link']}>
          {cat}
        </Link>
      ))}
    </header>
  );
}

export default Navbar;
