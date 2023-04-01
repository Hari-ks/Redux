import { Provider } from 'react-redux';
import Products from './Product';
import CartPage from './ShopPage';
//import cardStore from './Redux/Storage';
import cardStore from './Storage';
import WishList from './WishList';





const Redux=()=>{
    <Provider store={cardStore}>
    <CartPage/>
    <hr/>
    <Products/>
    <hr/>
    <WishList/>
   </Provider>
   
}

export default Redux;