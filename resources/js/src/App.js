import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { init } from 'aos';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Home from './containers/Home/Home';

import 'aos/dist/aos.css';

const asyncAbout = asyncComponent(() => import('./containers/About/About'));
const asyncProducts = asyncComponent(() => import('./containers/Products/Products'));
const asyncContact = asyncComponent(() => import('./containers/Contact/Contact'));

class App extends Component {
    componentDidMount() {
        init();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/about-us" component={asyncAbout} />
                <Route path="/our-products" component={asyncProducts} />
                <Route path="/contact-us" component={asyncContact} />

                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        );

        return <Layout>
            {routes}
        </Layout>;
    }
}

export default withRouter(App);
