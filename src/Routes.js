import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AboutUs } from "./about-Us";
import { Banner } from "./banner";
import { Contactus } from "./Contactus";
import { Footer } from "./Footer";
import Header from "./header";
import { Ourservice } from "./our-service";
import  ScrollToTop  from "./ScrollToTop";

export default function Routes() {
    return (
        <Router>
            <ScrollToTop />
                <Header />
                <Route path="/" exact>
                    <Banner />
                </Route>
                <Route path="/aboutus" exact>
                    <AboutUs />
                </Route>
                <Route path="/services">
                    <Ourservice />
                </Route>
                <Route path="/contactus">
                    <Contactus />
                </Route>
               
                <Footer/>
                
        </Router>
    );
}