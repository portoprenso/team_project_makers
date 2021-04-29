import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductList from '../Products/ProductList';
import MainCarousel from '../Carousel/Carousel';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <MainCarousel/>
            <ProductList />
            <Footer/>
        </div>
    );
};

export default HomePage;