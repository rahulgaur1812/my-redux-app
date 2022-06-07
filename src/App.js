import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetail';
import ProductComponent from './containers/ProductComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/'  element={<ProductListing/>}/>
          <Route exact path='/product/:productId'  element={<ProductDetails/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
