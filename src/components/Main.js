/**
 * Created by jukka on 04/05/2017.
 */
import React, { Component } from "react";

export class Main extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.hello}</h1>
            </div>
        );
    }
}