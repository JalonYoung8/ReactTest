import { useReducer } from 'react';
import FunkoContext from './';
import funkoReducer from './funkoReducer';

import data from '../../data/data';

const funkos = data.map((funko) => {
  funko['id'] = `${funko['name']}-${funko['category']}`.toLowerCase();

  return funko;
});

function FunkoState({ children }) {
  const initialState = { funkos };

  const [state] = useReducer(funkoReducer, initialState);

  return (
    <FunkoContext.Provider value={{ ...state }}>{children}</FunkoContext.Provider>
  );
}

export default FunkoState;
