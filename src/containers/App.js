/**
 * Created by jukka on 04/05/2017.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Main } from "../components/Main";

class App extends Component {
    render() {
        return (
            <div>
                <Main hello={this.props.greeting}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.greetings.greeting
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
