import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductList from '../Products/ProductList';
import Catalog1 from '../Products/Catalog1'
import Catalog2 from '../Products/Catalog2'
import MainCarousel from '../Carousel/Carousel';
import Card2 from '../Card2/Card2';

const HomePage = () => {
    return (
        <div>
            <MainCarousel/>
            {/* <Card2/> */}
            <ProductList />


{/* test for nested routes */}

            {/* <Link exact to="/homepage/catalogue1">CLICK 1</Link>
            <Link exact to="/homepage/catalogue2">CLICK 2</Link>
            <Link exact to="/homepage/test">TEST</Link>
            <Switch>
                <Route exact path='/homepage/catalogue1' component={Catalog1}/>
                <Route exact path='/homepage/catalogue2' component={Catalog2}/>
                <Route exact path="/homepage/test" component={Header} />
            </Switch> */}


        </div>
    );
};

export default HomePage;