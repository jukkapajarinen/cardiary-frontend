import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import App from './App';
import store from "../store";

test('renders without crashing', () => {
    const div = document.createElement('div');
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        div
    );
});
