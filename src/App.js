import React,{useState} from 'react'
import CartssProvider from './CartContextProvider';
import Header from './Header';
import Items from './Items';
import Cart from './Cart';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartssProvider>
      {/* { cartIsShown && <Cart onClose={hideCartHandler} /> }<hr/> */}
      <Header onShowCart ={showCartHandler} /><hr style={{border:"1px solid black"}}></hr>
      { cartIsShown && <Cart onClose={hideCartHandler} /> }
      <Items/>
    </CartssProvider>
  );
}

export default App;
