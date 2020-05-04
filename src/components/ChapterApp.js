import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import LandingPage from "./register/LandingPage";
import LoginPage from "./login/LoginPage";
import ShopPage from "../containers/ShopPage";
import '../styles/ChapterApp.css';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";


const ChapterApp = () => {
    return (
        < Router >
            <div className="header">
                <NavigationBar />
            </div>

            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/shop" exact component={ShopPage} />
            </Switch>

            <Footer />
        </Router >
    );
};

export default ChapterApp;