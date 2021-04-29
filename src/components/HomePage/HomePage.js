import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductList from '../Products/ProductList';
import Catalog1 from '../Products/Catalog1'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <ProductList />
            <Footer/>
        </div>
    );
};

export default HomePage;