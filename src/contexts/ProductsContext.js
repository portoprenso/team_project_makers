import React, { useReducer } from 'react';
import axios from 'axios'


export const productsContext = React.createContext();
const INIT_STATE = {
}
const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        default: return state
    }
}
const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    return (
        <productsContext.Provider value={{}}>
            {children}
        </productsContext.Provider>
    )
}
export default ProductsContextProvider;