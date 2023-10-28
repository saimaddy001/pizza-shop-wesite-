import './App.css';
import Home from './Compo/Home';
import Product from './Compo/Product';
import Service from './Compo/Service';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

function App() {
  return (
  <>
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Product' exact element={<Product />} />
            <Route path='/Service' exact element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
    
  );
}

export default App;
