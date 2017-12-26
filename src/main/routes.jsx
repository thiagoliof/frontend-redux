import React from 'react'
import {Router, Route, Redirect, hashHistory, browserHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={browserHistory} >
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)