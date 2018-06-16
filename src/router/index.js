import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Homepage from '../containers/Home/home.container';
import Currency from '../containers/Home/currency.container';

export default (
    <Router>
        <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/changecurr" component={Currency} />
        </div>
    </Router>
)