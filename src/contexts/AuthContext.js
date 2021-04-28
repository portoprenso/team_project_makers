import React, { useReducer } from 'react';
import axios from 'axios'


export const authContext = React.createContext();
const INIT_STATE = {
}
const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        default: return state
    }
}
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    return (
        <authContext.Provider value={{}}>
            {children}
        </authContext.Provider>
    )
}
export default AuthContextProvider;