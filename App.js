import logo from './logo.svg';
import './App.css';
import Header from './Header';
import data from './data';

import { useState } from 'react';
import Main from './Main';
function App() {

  const{ product } = data;
  const[cartItems,stCartItems] = useState([]);
  return (
    

    <div className="App">
    <Header/>
    <div className="row">
      <Main products={product}></Main>
      ss
    </div>
    </div>
  );
}

export default App;
