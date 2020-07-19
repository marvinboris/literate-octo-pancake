import React, { Component } from 'react';
import { Row, Col, Spinner, Card, CardHeader, CardBody, Modal, ModalHeader, ModalBody, Button, } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Layout.css';
import Logo from '../../components/UI/Logo/Logo';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

import { updateObject } from '../../shared/utility';


class Layout extends Component {
    state = {
        showSideDrawer: false,
        modal: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => ({
            showSideDrawer: !prevState.showSideDrawer
        }));
    }

    toggle = () => this.setState(prevState => updateObject(prevState, { modal: !prevState.modal }))

    render() {
        const { children } = this.props;
        const { sideDrawerToggleHandler, toggle } = this;

        const content = <>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <main className="Content px-0 px-lg-0 w-100 bg-white full-height-app" style={{ overflowX: 'hidden' }}>
                {children}
            </main>
            <Footer />
        </>;

        return content;
    }
}

export default Layout;