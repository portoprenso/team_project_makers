import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProductsContextProvider from "../contexts/ProductsContext";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomePage from '../components/HomePage/HomePage'
import AuthContextProvider from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoutes';
// import Login from '../components/Loginin/Login';
import Catalog1 from '../components/Products/Catalog1';
import SignIn from '../components/Authorization/SignIn'
import SignUp from '../components/Authorization/SignUp'
import ForgotPassword from '../components/Authorization/ForgotPassword'
import UpdateProfile from '../components/Authorization/UpdateProfile'
import DashBoard from '../components/Authorization/DashBoard'
import RpgPage from '../components/GenresPages/RpgPage'
import Popular from '../components/Popular/Popular';




const Routes = () => {
    return (
        <ProductsContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                    <PrivateRoute exact path="/" component={HomePage} />
                    {/* <PrivateRoute exact path="/" component={Popular}/>  */}
                    <PrivateRoute exact path="/profile" component={DashBoard} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                        {/* <Route exact path='/cart' component={Cart} /> */}
                        <Route exact path='/forgot-password' component={ForgotPassword} />
                        <Route exact path='/signup' component={SignUp} />
                        <Route exact path='/login' component={SignIn}/>
                        <Route exact path='/update-profile' component={UpdateProfile}/>
                        <Route exact path='/rpg' component={RpgPage}/>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </AuthContextProvider>
        </ProductsContextProvider>
    );
};

export default Routes;