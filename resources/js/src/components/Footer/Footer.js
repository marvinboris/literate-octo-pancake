import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faHeart, faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Logo from '../UI/Logo/Logo';
import FooterBlock from './FooterBlock/FooterBlock';

import Briluce from '../../assets/images/Briluce-logo-for-Dark-BG@2x.png';
import bdTask from '../../assets/images/bdtask-logo-white@2x.png';
import CleanForever from '../../assets/images/forever clean logo@2x.png';

import './Footer.css';

const footer = () => (
    <div className="Footer text-white text-montserrat">
        <footer className="container d-none d-md-block py-5">
            <Row>
                <Col lg={4}>
                    <Logo />
                </Col>
                <Col>
                    <FooterBlock title="Our Partners">
                        <img src={Briluce} style={{ width: 90 }} className="d-inline-block" />
                        <img src={bdTask} style={{ width: 90 }} className="d-inline-block" />
                        <img src={CleanForever} style={{ width: 90 }} className="d-inline-block" />
                    </FooterBlock>
                </Col>
                <Col lg={4}>
                    <FooterBlock title="Phone & E-mail">
                        <dl className="row">
                            <dl className="col-5 d-flex justify-content-between">
                                <div>
                                    <FontAwesomeIcon icon={faPhoneSquareAlt} className="mr-2 text-limo" fixedWidth /><strong>Office</strong>
                                </div>
                                :
                            </dl>
                            <dl className="col-7 pl-sm-4">
                                <div><a href="tel:(+237) 123 345 545" className="text-white text-decoration-none">(+237) 123 345 545</a></div>
                            </dl>

                            <dl className="col-5 d-flex justify-content-between">
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-limo" fixedWidth /><strong>E-mail</strong>
                                </div>
                                :
                            </dl>
                            <dl className="col-7 pl-sm-4">
                                <div><a href="mailto:contact@git-sa.net" className="text-white text-decoration-none">contact@git-sa.net</a></div>
                                <div><a href="mailto:liyeplimal@gmail.com" className="text-white text-decoration-none">liyeplimal@gmail.com</a></div>
                            </dl>

                            <dl className="col-5 d-flex justify-content-between">
                                <div>
                                    <FontAwesomeIcon icon={faHeadset} className="mr-2 text-limo" fixedWidth /><strong>Support</strong>
                                </div>
                                :
                            </dl>
                            <dl className="col-7 pl-sm-4">
                                <div><a href="https://support.git-sa.net" target="_blank" className="text-white text-decoration-none">support.git-sa.net</a></div>
                            </dl>
                        </dl>
                    </FooterBlock>
                </Col>
                <Col>
                    <FooterBlock title="Recent Tweets">
                        <div>Liyeplimal</div>
                        <div>Limarket</div>
                        <div>Simtrex</div>
                        <div>Simbcoin</div>
                        <div>Auto-Ecole Université</div>
                        <div>Workoo</div>
                        <div>Liportal</div>
                    </FooterBlock>
                </Col>
            </Row>
        </footer>
        <footer className="container-fluid border-top border-border-50 pb-4">
            <div className="container text-center pt-4">
                © Copyrights 2020 <span className="text-limo text-700">GIT S.A</span>. All rights reserved. By <span className="text-700">GIT S.A Developers</span>.
            </div>
        </footer>
    </div>
);

export default footer;
