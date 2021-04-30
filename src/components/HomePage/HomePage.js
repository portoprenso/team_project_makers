import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductList from '../Products/ProductList';
import Catalog1 from '../Products/Catalog1'
import MainCarousel from '../Carousel/Carousel';

const HomePage = () => {
    return (
        <div>
            <h1>some text</h1>
            <Header/>
            <MainCarousel/>
            <ProductList />
            <Footer/>
        </div>
    );
};

export default HomePage;