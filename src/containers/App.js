import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Navigation } from "../components/Navigation";
import { About } from "../components/About";
import { NotFound } from "../components/NotFound";
import Main from "./Main";
import Login from "./Login";

class App extends Component {

    constructor(props) {
        console.log("App constructor");
        super(props);
    }

    componentWillMount() {
        console.log("App componentWillMount");
        let authenticated = true; // authenticate user..
        this.state = {loggedIn: authenticated};
    }

    render() {
        console.log("App render");
        console.log(this.state);
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" render={() => this.state.loggedIn ? <Main/> : <Login/>}/>
                        <Route path="/about" render={() => this.state.loggedIn ? <About/> : <Login/>}/>
                        <Route render={() => <NotFound/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
