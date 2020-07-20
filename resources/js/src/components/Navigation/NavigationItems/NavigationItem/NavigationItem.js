import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './NavigationItem.css';

const navigationItem = ({ icon, children, href, className = '', different, font, exact = true, external, toggleNavbar }) => (
    <NavItem className="NavigationItem">
        {external ? <a className={'nav-link ' + ('text-' + font) + ' ' + className} href={href} target="_blank" onClick={toggleNavbar}>
            {icon ? <FontAwesomeIcon icon={icon} className="mr-1" /> : null}{children}
        </a> : <NavLink className={'nav-link ' + ('text-' + font) + ' ' + className} to={href} onClick={toggleNavbar} exact={exact} activeClassName={!different ? "text-700 active text-white" : ""}>
                {icon ? <FontAwesomeIcon icon={icon} className="text-lightblue mr-1" /> : null}{children}<FontAwesomeIcon icon={faCircle} className="ml-1 point text-danger text-xx-small" />
                <div className="underline pt-1" style={{ marginLeft: icon && '1.25rem' }}>
                    <div className="bg-lightblue" />
                </div>
            </NavLink>}
    </NavItem>
);

export default navigationItem;