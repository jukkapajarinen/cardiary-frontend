import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component  {

    constructor(props){
        console.log("Main constructor");
        super(props);
    }

    render() {
        console.log("Main render");
        return (
            <div>
                <h1>Hello {this.props.greeting}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);