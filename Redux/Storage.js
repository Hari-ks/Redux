

/**
 * Redux Store for eCommerce data
 * 
 * 1. cart
 *    - Create a slice for Cart specific data and its actions to update the data
 *    - initial cart data is []
 * 2. user
 *    - Create a slice for User specific data and its actions to update the data
 * 3. searchHistory
 *    - Create a slice for Search specific data and its actions to update the data
 */

import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
   products: [],
   wishList: [],
   totalCount: 0
}

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {

      addToCart: (state, action) => {
         state.products.push(action.payload);
         state.totalCount += 1
      },
      addProductCount: (state, action) => {
         state.products.map((v, i) => {
            if (v.id === action.payload) {
               console.log("count state", state.products[i].count)
               state.products[i].count += 1;
               state.totalCount += 1 //action.payload;
            }
         })
      },
      decreaseProduct: (state, action) => {
         state.products.map((v, i) => {
            if (v.id === action.payload) {
               console.log("decrease state", state.products[i].count)
               if (v.count > 1)
                  v.count -= 1
               state.totalCount -= 1//action.payload;
               // state.products[i].count -= 1
            }
         })
      }
      ,
      removeFromCart: (state, action) => {
         state.products.splice(action.payload, 1);
      },
      //  updateCart: (state, action) => {
      //    state[action.payload.index ] = action.payload.value;
      //  },
      clearCart: (state, action) => {
         state.products.length = 0;
      },
      addTotalCount: (state, action) => {
         console.log("count", action)
        // if(action.payload.count>0)
            state.products[action.payload.index].count = action.payload.count

         
         //state.totalCount +=action.payload.count
      },
      addWishList: (state, action) => {
         state.wishList.push(action.payload)
      },
      clearTotalCount: (state, action) => {
         state.totalCount = 0
      },
      
      removeWishList: (state, action) => {
         state.wishList.splice(action.payload, 1);
      }


   }
})

export const cartActions = cartSlice.actions;

const cardStore = configureStore({
   reducer: {
      cart: cartSlice.reducer
   }
})

export default cardStore;


