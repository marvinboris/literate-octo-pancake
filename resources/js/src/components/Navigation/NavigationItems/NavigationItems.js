import React from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faComments } from '@fortawesome/free-regular-svg-icons';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuth, name, logoutHandler, toggleNavbar, role, cartItemsNumber, notifications, light = false, font }) => {
    return (
        <Nav className="d-flex align-items-center" navbar>
            <NavigationItem font={font} toggleNavbar={toggleNavbar} icon={faHome} href="/">Home</NavigationItem>
            <NavigationItem font={font} toggleNavbar={toggleNavbar} href="/about-us">About Us</NavigationItem>
            <NavigationItem font={font} toggleNavbar={toggleNavbar} href="/our-products">Our Products</NavigationItem>
            <NavigationItem font={font} toggleNavbar={toggleNavbar} href="/contact-us">Contact Us</NavigationItem>
        </Nav>
    );
}

export default navigationItems;