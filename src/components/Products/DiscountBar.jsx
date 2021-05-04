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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
      },
      paper: {
        width: 800,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
      },
    
  }));

const ProductList = () => {
    const classes = useStyles()
    const history = useHistory()
    const { getProductsData, productsData, paginationPages } = useContext(productsContext)
    function getPage() {
        const search = new URLSearchParams(history.location.search)
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
            <div className={classes.root}>
            <Grid container item xs={8} spacing={6}>
                {
                    productsData.map((item) => (
                        <ProductCard className={classes.paper} item={item} key={item.id} />
                        ))
                    }
            </Grid>
            <Pagination page={+page} onChange={(event, page) => {handlePage(event, page)}} count={paginationPages} color="primary" />
            {/* <Link exact to="/catalogue1">CLICK 1</Link>
            <Link exact to="/catalogue2">CLICK 2</Link>
            <Link exact to="/test">TEST</Link>
                    <Route exact path='/catalogue1' component={Catalog1}/>
                    <Route exact path='/catalogue2' component={Catalog2}/>
                    <Route exact path="/test" component={Header} /> */}
            </div>
    );
}

export default ProductList;