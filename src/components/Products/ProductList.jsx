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
import ProductCardSmall from './ProductCardSmall';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { JSON_API } from '../../helpers/constants'
import axios from 'axios'
import "./ProductList.css"


// useStyles start here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const useStyles = makeStyles((theme) => ({
    productList__root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        margin: '0 auto',
        // display: "flex",
      },
      productList__container: {
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: 50,
      },
      paginationClass:{
        marginTop: 50
      },
      root: {
        backgroundColor: theme.palette.background.paper,
        // width: "60%",
      },
      discountText: {
          height: 10,
        //   marginBottom: 10
      },
      paperSmall: {
          height: 10
      }
  }));

  // useStyles end here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  


const ProductList = (props) => {
    const classes = useStyles()
    const theme = useTheme();
    const history = useHistory()
    const [value, setValue] = React.useState(0);
    const [testDiscount, settestDiscount] = useState(0);

    const getTestDiscount = async (history) => {
        let res = await axios(`${JSON_API}?_limit=8&${window.location.search}&_sort=discountPercent&_order=desc`)
        console.log(res);
        console.log('res');
        settestDiscount(res)
        // console.log(res.data);
    }


    const {
        getProductsData,
        productsData,
        paginationPages,
        getProductsDataIdSorted,
        getProductsDataStockSorted,
        getProductsDataExpectedSorted,
        getProductsDataDiscountSorted,
        productsWithDiscount
    } = useContext(productsContext)
    function getPage() {
        const search = new URLSearchParams(history.location.search)
        // console.log(history);
        return search.get('_page')
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    

    

    const [page, setPage] = useState(getPage())
    const handlePage = (event, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setPage(page)
        getProductsData(history)
        getProductsDataDiscountSorted();
    }
    useEffect(() => {
        getProductsData(history);
        getTestDiscount(history)
        // getProductsDataDiscountSorted(history);
        // console.log(productsWithDiscount);
    },[])
    console.log(testDiscount)
    return (
            <Grid className={classes.productList__root} xs={11}>
                <Grid className={classes.productList__container}>


                    <div className={`${classes.root} tabsContainer`}>
                        <AppBar position="static" color="default">
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            >
                            <Tab className="asd" onClick={() => getProductsDataIdSorted(history)} label="Новинки" {...a11yProps(0)} />
                            <Tab className="asd" onClick={() => getProductsDataStockSorted(history)} label="В наличии" {...a11yProps(1)} />
                            <Tab className="asd" onClick={() => getProductsDataExpectedSorted(history)} label="Ожидаемые" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <Grid className={classes.productList__container__mainbar} container item spacing={4}>
                                    {
                                    productsData.map((item) => (
                                        <ProductCard xs={12} sm={12} className={classes.paper} item={item} key={item.id} />
                                        ))
                                    }
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <Grid className={classes.productList__container__mainbar} container item spacing={4}>
                                    {
                                    productsData.map((item) => (
                                        <ProductCard xs={12} sm={12} className={classes.paper} item={item} key={item.id} />
                                        ))
                                    }
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <Grid className={classes.productList__container__mainbar} container item spacing={4}>
                                    {
                                    productsData.map((item) => (
                                        <ProductCard xs={12} sm={12} className={classes.paper} item={item} key={item.id} />
                                        ))
                                    }
                                </Grid>
                            </TabPanel>
                        </SwipeableViews>
                    </div>



                    <Grid className="productList__container__discountbar" container item xs={3}>
                    <Typography variant="h4" className={classes.discountText}>Скидки</Typography>
                        {
                            testDiscount ?
                            (testDiscount && testDiscount.data.map((item) => (
                                <ProductCardSmall xs={12} sm={12} item={item} key={item.id} />
                                ))) 
                                : (<div>asd</div>)
                            }
                    </Grid>
                </Grid>
                <Pagination className={classes.paginationClass} page={+page} onChange={(event, page) => {handlePage(event, page)}} count={paginationPages} color="primary" />
            </Grid>
    );
}

export default ProductList;