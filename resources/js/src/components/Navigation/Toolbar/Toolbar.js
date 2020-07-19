import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, NavbarBrand, Navbar, Collapse, NavbarToggler, Button } from 'reactstrap';
import { faCircle, faCaretDown, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

import './Toolbar.css';

export default ({ isAuth, name, drawerToggleClicked, logoutHandler, role, cartItemsNumber, notifications }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="Toolbar bg-transparent position-absolute border-bottom border-border-50 w-100" style={{ zIndex: 1000 }}>
            <Container>
                <Navbar dark className="py-4 justify-content-between" expand="md">
                    <Link to="/" className="navbar-brand"><Logo /></Link>

                    <div className="d-none d-xl-flex text-small text-white align-items-center justify-content-center">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth className="text-lightblue mr-1" />contact@git-sa.net
                        </div>

                        <div className="px-3 text-lightblue text-x-large">|</div>
                        
                        <div>
                            <FontAwesomeIcon icon={faPhone} fixedWidth className="text-lightblue mr-1" />contact@git-sa.net
                        </div>
                    </div>

                    <div className="pr-lg-3 d-flex align-items-center">
                        <div className="d-none d-lg-block"><NavigationItems /></div>

                        <div className="pl-lg-5">
                            <div className="d-inline-flex align-items-center">
                                <a href="#language-dropdown" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="language-dropdown" className="text-white text-decoration-none d-none d-sm-flex justify-content-around align-items-center">
                                    <span className="language-flag shadow-lg mr-2 overflow-hidden justify-content-center align-items-center position-relative">
                                        <span className="flag-icon position-absolute flag-icon-gb"></span>
                                    </span>
                                    <span className="px-2 border-left border-white-20 position-relative">
                                        <span className="text-700">En</span>
                                    </span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </a>

                                <NavbarToggler onClick={toggleNavbar} className="ml-sm-3 d-lg-none" />
                            </div>
                        </div>
                    </div>
                </Navbar>
            </Container>
            <div className="d-lg-none">
                <Collapse isOpen={!collapsed} navbar>
                    <NavigationItems font="secondary" toggleNavbar={toggleNavbar} />
                </Collapse>
            </div>
        </div>
    );
}