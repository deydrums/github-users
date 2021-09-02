//******************* AppRouter ******************* */
import React from 'react';
import {
    BrowserRouter  as Router,
    Switch,
    Redirect,
    Route
  } from "react-router-dom";
import { PrincipalScreen } from "../components/principal/PrincipalScreen";


export const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component ={PrincipalScreen}/>
                <Redirect to = "/"/>
            </Switch>
        </Router>
    )
}
