import React, { useReducer } from 'react';
import { JSON_API } from '../helpers/constants'
import axios from 'axios'
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice"
import { getCountProductsInCart } from '../helpers/calcPrice'
import { useHistory } from 'react-router';



export const productsContext = React.createContext();
const INIT_STATE = {
    productsData: [],
    productDetails: {},
    paginationPages: 1,
    cart: {},
    cartLength: getCountProductsInCart(),
    productsWithDiscount: []
}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case "GET_PRODUCTS_DATA":
            return {...state, productsData: action.payload.data, paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 8)}
        case 'GET_CART':
            return {...state, cart: action.payload}
        case 'CHANGE_COUNT':
            return {...state, cartLength: action.payload}
        case 'GET_PRODUCTS_DATA_WITH_DISCOUNT':
            return {...state, productsWithDiscount: action.payload}
        case 'GET_PRODUCTS_DETAILS':
            return {...state, productDetails: action.payload}
        default: return state
    }
}


const ProductsContextProvider = ({ children }) => {
    const history = useHistory()
    const getProductsData = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 8)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let res = await axios(`${JSON_API}?_limit=8&${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS_DATA",
            payload: res
        })
    }

    const getProductDetails = async (id) => {
        let { data } = await axios(`${JSON_API}/${id}`)
        dispatch({
            type: 'GET_PRODUCTS_DETAILS',
            payload: data
        })
    }

    const editProduct = async (id, newObj, story) => {
        await axios.patch(`${JSON_API}/${id}`, newObj)
        getProductsData(story)
    }

    const getProductsDataIdSorted = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 8)
        search.delete('_sort')
        search.delete('_order')
        search.delete('countInStock_gte')
        search.delete('countInStock_lte')
        search.set('_sort', "id")
        search.set('_order', "desc")
        history.push(`${history.location.pathname}?${search.toString()}`)
        let res = await axios(`${JSON_API}?_limit=8&${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS_DATA",
            payload: res
        })
    }


    const getProductsDataStockSorted = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 8)
        search.delete('_sort')
        search.delete('_order')
        search.delete('countInStock_lte')
        search.set('countInStock_gte', 1)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let res = await axios(`${JSON_API}?_limit=8&${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS_DATA",
            payload: res
        })
    }


    const getProductsDataExpectedSorted = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 8)
        search.delete('_sort')
        search.delete('_order')
        search.delete('countInStock_gte')
        search.set('countInStock_lte', 1)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let res = await axios(`${JSON_API}?_limit=8&${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS_DATA",
            payload: res
        })
    }


    const getProductsDataDiscountSorted = async (history) => {
        let res = await axios(`${JSON_API}?_limit=8&${window.location.search}&_sort=discountPercent&_order=desc`)
        dispatch({
            type: "GET_PRODUCTS_DATA_WITH_DISCOUNT",
            payload: res
        })
    }



    function addProductToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }

        let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
        if(filteredCart.length > 0) {
            cart.products.filter(elem => elem.item.id !== product.id)
        }
        else {
            cart.products.push(newProduct)
        }
        newProduct.subPrice = calcSubPrice(newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "CHANGE_COUNT",
            payload: cart.products.length
        })
    }

    async function removeProductFromCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let filteredCart = {
            products: [...cart.products.filter(elem => elem.item.id !== product.id)],
            totalPrice: 0            
        }
        await filteredCart.products.filter(elem => elem.item.id != product.id)
        await localStorage.removeItem('cart')
        filteredCart.totalPrice = calcTotalPrice(filteredCart.products)
        await localStorage.setItem('cart', JSON.stringify(filteredCart))
        await dispatch({
            type: "CHANGE_COUNT",
            payload: filteredCart.products.length
        })
        await getCart()
    }

    async function removeAllProductsFromCart() {
        await localStorage.removeItem('cart')
        await dispatch({
            type: "CHANGE_COUNT",
            payload: null
        })
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    function changeProductCount(count, id) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.map(elem => {
            if(elem.item.id === id) {
                elem.count = count
                elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }

    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false
    }

    async function addNewProduct(newGame, story) {
        await axios.post(JSON_API, newGame)
        getProductsData(story)
    }

    async function deleteProduct(id, story) {
        await axios.delete(`${JSON_API}/${id}`)
        getProductsData(story)
    }
    


    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    let values = {
        productsData: state.productsData,
        paginationPages: state.paginationPages,
        cartLength: state.cartLength,
        cart: state.cart,
        productsWithDiscount: state.productsWithDiscount,
        productDetails: state.productDetails,
        getProductsData,
        getProductsDataIdSorted,
        addProductToCart,
        getCart,
        changeProductCount,
        checkProductInCart,
        addNewProduct,
        deleteProduct,
        getProductsDataStockSorted,
        getProductsDataExpectedSorted,
        getProductsDataDiscountSorted,
        getProductDetails,
        editProduct,
        removeProductFromCart,
        removeAllProductsFromCart
    }

    return (
        <productsContext.Provider value={values}>
            {children}
        </productsContext.Provider>
    )
}
export default ProductsContextProvider;