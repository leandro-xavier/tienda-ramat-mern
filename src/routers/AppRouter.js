import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/screen/auth/login/LoginScreen';
import { RegisterScreen } from '../components/screen/auth/register/RegisterScreen';
import {HomeScreen} from "../components/screen/home/HomeScreen"
  
export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    <Route exact path="/auth/register" component={RegisterScreen}/>
                </Switch>
            </Router>
        </div>
    )
}
