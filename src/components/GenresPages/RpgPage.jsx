import React, {useContext, useEffect, useState} from 'react';
import ProductsContextProvider, {productsContext} from "../../contexts/ProductsContext";
import {Button, Grid, Typography} from "@material-ui/core";
import ProductCard from "../Products/ProductCard";
import Pagination from '@material-ui/lab/Pagination';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import AuthContextProvider, {authContext} from "../../contexts/AuthContext";
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import ProductCardSmall from '../Products/ProductCardSmall';

const useStyles = makeStyles((theme) => ({
    productList__root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        margin: '0 auto',
        // display: "flex",
      },
      paper: {
        // margin: `${theme.spacing(1)}px auto`,
        // padding: theme.spacing(2),
      },
      productList__container: {
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: 50
      },
      productList__container__discountbar:{

      }
  }));


const ProductList = () => {
    const classes = useStyles()
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
            <Grid className={classes.productList__root} xs={11}>
                <Typography className={classes.productCard__price} align="center" variant="h4" color="textPrimary">Ролевые игры</Typography>
                <Grid className={classes.productList__container}>
                    <Grid className={classes.productList__container__mainbar} container item xs={8} spacing={6}>
                        {
                            productsData.map((item) => (
                                <ProductCard xs={12} sm={12} className={classes.paper} item={item} key={item.id} />
                                ))
                            }
                    </Grid>
                    <Grid className={classes.productList__container__discountbar} container item xs={3} spacing={6}>
                        {
                            productsData.map((item) => (
                                <ProductCardSmall xs={12} sm={12} className={classes.paper} item={item} key={item.id} />
                                ))
                            }
                    </Grid>
                </Grid>
                <Pagination page={+page} onChange={(event, page) => {handlePage(event, page)}} count={paginationPages} color="primary" />
            </Grid>
    );
}

export default ProductList;