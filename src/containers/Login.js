import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component  {

    constructor(props){
        console.log("Login constructor");
        super(props);
    }

    render() {
        console.log("Login render");
        return (
            <div>
                <h1>Login</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);