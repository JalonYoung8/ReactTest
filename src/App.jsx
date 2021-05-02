import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/UI/Navbar/Navbar';
import Wrapper from './components/pages/Wrapper/Wrapper';

import { ProductState } from './context/productsContext';

import './App.scss';

function App() {
  return (
    <Router>
      <ProductState>
        <div className='App'>
          <Navbar />
          <Wrapper />
        </div>
      </ProductState>
    </Router>
  );
}

export default App;
