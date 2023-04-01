import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FilterList from './Filter/Filter';
import './index.css';
import Counter from './Counter&Timer/Counter';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Timer from './Counter&Timer/Timer';
import MediaCard from './Working/MUI';
import Conatiner from './Working/MUI';
import FormInput from './Working/SampleForm';
import ArticleForm from './Working/ArticleForm';
import DrawerAppBar from './Working/HomePage';
import SignInForm from './Working/SignIn';
import MainArticleForm from './Working/MainArticleForm';
import SignUp from './Working/SignUp';
import MainPage from './Working/MainPage';
import Contact from './Working/Contact';
import About from './Working/About';
import Component3 from './Practise/UseContext/OtherComponent';
import Context from './Practise/UseContext/useContext';
import Component1 from './Practise/UseContext/SampleConetxt';
import TaskFile from './Working/TaskFile';
import Normal from './Practise/CustomHooks/CustomHooks';
import NestedRouting from './Working/NestedRouting';
import { Content1, Content2 } from './Working/Content';
import MainComponent from './Practise/HigerOrderComponents/MainComponent';
import UseCallBack from './Practise/useCallBack/UseCallBack';
import Redux from './Redux/HomePage';
import Products from './Redux/Product';
import { Provider } from 'react-redux';
import cardStore from './Redux/Storage';
import CartPage from './Redux/ShopPage';
import WishList from './Redux/WishList';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >

    <BrowserRouter>
      <Routes>

        <Route path='/home' element={<DrawerAppBar />}>
          <Route path='/home' element={<MainPage />} />
          {/* <Route exact path="/home/counter" element={<Counter/>}/>
        <Route exact path="/home/filter" element={<FilterList/>}/> */}
          <Route path='/home/articleform' element={<ArticleForm />} />
          <Route path='/home/contact' element={<Contact />} />
          <Route path='/home/about' element={<About />} />
          <Route exact path='/home/mainform' element={<MainArticleForm />} />
          <Route path='/home/nestedRout' element={<NestedRouting />}>
            <Route path='/home/nestedRout/task' element={<TaskFile />}>
              <Route path='/home/nestedRout/task/counter' element={<Counter />} />
              <Route path='/home/nestedRout/task/filter' element={<FilterList />} />
              <Route path="/home/nestedRout/task/timer" element={<Timer />} />
            </Route>
            <Route path='/home/nestedRout/content1' element={<Content1 />}></Route>
            <Route path='/home/nestedRout/content2' element={<Content2 />}></Route>
          </Route>
        </Route>


        <Route path="/timer" element={<Timer />} />
        <Route path='/f' element={<SignInForm />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path="*" element={<><h1>404 page</h1><br/><Link to="/">Home</Link></>}/> */}
        <Route path="/mui" element={<MediaCard />} />
        <Route exact path='/mainformNew' element={<MainArticleForm />} />
        <Route path='/demo' element={<FormInput />} />

        <Route path='/shop' element={
          <Provider store={cardStore}>
            <CartPage />
            <hr />
            <Products />
            {/* <WishList /> */}
          </Provider>
        }>
          <Route path='/shop/wishlist' element={

            <Provider store={cardStore}>
              <WishList />
            </Provider>
          } />

        </Route>


        <Route path='/wishlist' element={

          <Provider store={cardStore}>
            <WishList />
          </Provider>
        } />


      </Routes>
    </BrowserRouter>
    {/* <FilterList/>
   <Counter/>  */}
    {/* <App/> */}
    {/* <Provider store={cardStore}>
  <CartPage/>
  <hr/>
  <Products/>
 </Provider> */}
  </React.StrictMode>

);














































































































































































































