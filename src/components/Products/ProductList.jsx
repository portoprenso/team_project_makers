import React, {useContext, useEffect, useState} from 'react';
import ProductsContextProvider, {productsContext} from "../../contexts/ProductsContext";
import {Button, Grid} from "@material-ui/core";
import ProductCard from "./ProductCard";
import Pagination from '@material-ui/lab/Pagination';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import AuthContextProvider, {authContext} from "../../contexts/AuthContext";
import Catalog1 from './Catalog1';
import Catalog2 from './Catalog2';
import Header from '../Header/Header';

const ProductList = () => {
    const history = useHistory()
    const { getProductsData, productsData, paginationPages } = useContext(productsContext)
    function getPage() {
        const search = new URLSearchParams(history.location.search)
        // console.log(history);
        return search.get('_page')
    }
    const [page, setPage] = useState(getPage())
    const handlePage = (event, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setPage(page)
        getProductsData(history)
    }
    useEffect(() => {
        getProductsData(history)}, []
    )
    return (
            <>

            {/* <ProductsContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Switch> */}
                        {/* <Route exact path="/" component={HomePage} /> */}
                        {/* <PrivateRoute exact path="/profile" component={DashBoard} /> */}
                        {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
                        {/* <Route exact path='/login' component={SignIn} /> */}
                        {/* <Route exact path='/signup' component={SignUp} /> */}
                        {/* <Route exact path='/cart' component={Cart} /> */}
                        {/* <Route exact path='/login' component={Login}/> */}
                        {/* <Route exact path='/cat1' component={Catalog1}/> */}
                    {/* </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ProductsContextProvider> */}


            {/* <BrowserRouter>
                <Switch> */}
                    {/* <Route exact path="/catalog1" component={Catalog1} />
                    <Route exact path="/catalog2" component={Catalog2} /> */}
                    {/* <Route exact path="/catalog-2" component={HomePage} />
                    <Route exact path="/catalog-3" component={HomePage} /> */}
                {/* </Switch>
            </BrowserRouter> */}
            <Grid container spacing={3}>
                {
                    productsData.map((item) => (
                        <ProductCard item={item} key={item.id} />
                        ))
                    }
            </Grid>
            <Pagination page={+page} onChange={(event, page) => {handlePage(event, page)}} count={paginationPages} color="primary" />
            <Link exact to="/catalogue1">CLICK 1</Link>
            <Link exact to="/catalogue2">CLICK 2</Link>
            <Link exact to="/test">TEST</Link>
            
                    <Route exact path='/catalogue1' component={Catalog1}/>
                    <Route exact path='/cat1' component={Catalog1}/>
                    <Route exact path="/test" component={Header} />
            </>
    );
}

export default ProductList;