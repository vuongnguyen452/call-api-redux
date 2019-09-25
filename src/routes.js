import React from 'react';
import HomePages from './pages/HomePages/HomePages';
import NotFoundPages from './pages/NotFoundPages/NotFoundPages';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPages/ProductActionPage';
const routes=[
  {
    path:'/',
    exact: true,
    main: ()=> <HomePages/>
  },
  {
    path:'/product-list',
    exact: false,
    main:() => <ProductListPage/>
  },
  {
    path:'/product/add',
    exact: false,
    main:({history}) => <ProductActionPage history={history}/>
  },
  {
    path:'/product/:id/edit',
    exact: false,
    main:({match, history}) => <ProductActionPage match={match} history ={history}/>
  },
  {
    path:'',
    exact: false,
    main: ()=> <NotFoundPages/>
  }
];
export default routes