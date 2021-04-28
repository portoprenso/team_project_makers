import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProductsContextProvider from "../contexts/ProductsContext";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomePage from '../components/HomePage/HomePage'
import AuthContextProvider from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoutes';
import Login from '../components/Loginin/Login';



const Routes = () => {
    return (
        <ProductsContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        {/* <PrivateRoute exact path="/profile" component={DashBoard} /> */}
                        {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
                        {/* <Route exact path='/login' component={SignIn} /> */}
                        {/* <Route exact path='/signup' component={SignUp} /> */}
                        {/* <Route exact path='/cart' component={Cart} /> */}
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ProductsContextProvider>
    );
};

export default Routes;