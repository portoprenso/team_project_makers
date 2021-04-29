import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductList from '../Products/ProductList';

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