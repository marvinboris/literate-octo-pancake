import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faClock, faComments, faDesktop, faUserFriends, faBriefcase, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin, faWhatsappSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import OwlCarousel from 'react-owl-carousel2';

import BetweenButton from "../../components/UI/Button/BetweenButton/BetweenButton";

import UnderCarouselBlock from "./UnderCarouselBlock/UnderCarouselBlock";
import AppBlock from "./AppBlock/AppBlock";
import TeamBlock from "./TeamBlock/TeamBlock";

import "./Home.css";

import BannerImg from "../../assets/images/garden-court-sandton-city-facilities-pool-01-1@2x.png";
import HomeBodyBg from "../../assets/images/Group 658@2x.png";

import Limo from '../../assets/images/LOGO LIMO@2x.png';
import Limarket from '../../assets/images/logo limarket@2x.png';
import ACM from '../../assets/images/LOGO AFRICAN CRYPTO MEDIA@2x.png';
import SimbCity from '../../assets/images/LOGO-SIMBCITY-OK@2x.png';
import SimbCoin from '../../assets/images/PIECE-OR-ET-ARGENT-1 copie@2x.png';
import Simtrex from '../../assets/images/LOGO-Simtrex@2x.png';
import TradingAcademy from '../../assets/images/LOGO-GIT-TRADING-ACADEMY@2x.png';
import Restaurant from '../../assets/images/LOGO-RESTAURANT-LIYEPLIMAL@2x.png';
import Workoo from '../../assets/images/LOGO WORKOO@2x.png';
import Liportal from '../../assets/images/Plan de travail 1@4x@2x.png';
import KingChicken from '../../assets/images/IMG-20200219-WA0046 2@2x.png';
import LimarketMada from '../../assets/images/LOGO LIMARKET MADAGASCAR POUR SITE@2x.png';

import CEO1 from '../../assets/images/EXLv_LuXgAEHwS8@2x.png';
import BehindCEO from '../../assets/images/unnamed@2x.png';

import Briand from '../../assets/images/C360_2020-06-13-15-24-50-992@2x.png';
import CEO from '../../assets/images/1-67@2x.png';
import Innocent from '../../assets/images/5.-innocent@2x.png';

import MapsBg from '../../assets/images/acf-google-map-field-interface@2x.png';

const images = [
    Limo,
    Limarket,
    ACM,
    SimbCity,
    SimbCoin,
    Simtrex,
    TradingAcademy,
    Restaurant,
    Workoo,
    Liportal,
    KingChicken,
    LimarketMada,
];

const cards = [
    {
        img: Limarket,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'Limarket Cameroon',
        subtitle: 'E-commerce platform',
        link: 'https://limarket.net',
        color: 'limarket',
    },
    {
        img: Limo,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'LIMO',
        subtitle: 'Liyeplimal Investment System',
        link: 'https://liyeplimal.net',
        color: 'limo',
        popular: true,
    },
    {
        img: SimbCoin,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'SIMBCOIN (SMB)',
        subtitle: 'GIT Real estate based cryptocurrency',
        link: 'https://simbcoin.net',
        color: 'simbcoin',
    },
    {
        img: SimbCity,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'Hotel Management',
        subtitle: 'System + Website',
        link: '#',
        color: 'simbcity',
    },
    {
        img: ACM,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'African Crypto Media',
        subtitle: 'Web Television',
        link: '#',
        color: 'acm',
    },
    {
        img: Simtrex,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'Simtrex',
        subtitle: 'Crypto currencies trading platform',
        link: 'https://simtrex.net',
        color: 'simtrex',
    },
    {
        img: TradingAcademy,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'GIT Trading Academy',
        subtitle: 'Our Trading Academy',
        link: 'https://gitacademy.net',
        color: 'academy',
    },
    {
        img: Restaurant,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'Restaurant Liyeplimal',
        subtitle: 'Our Restaurant',
        link: '#',
        color: 'restaurant',
    },
    {
        img: Workoo,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'Workoo',
        subtitle: 'Workoo.net',
        link: 'https://workoo.net',
        color: 'workoo',
    },
    {
        img: Liportal,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'Liportal',
        subtitle: 'E-commerce plateform',
        link: 'https://liportal.net',
        color: 'liportal',
    },
    {
        img: KingChicken,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'King Chicken',
        subtitle: 'King Chicken',
        link: '#',
        color: 'chicken',
    },
    {
        img: LimarketMada,
        children: <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</div>,
        title: 'Limarket Mada',
        subtitle: 'E-commerce platform',
        link: 'https://limarketmada.net',
        color: 'limarketmada',
    },
];

const team = [
    {
        firstname: 'EMILE PARFAIT',
        lastname: 'SIMB',
        job: 'C.E.O - Founder & Crypto Trader',
        img: CEO,
        children: <div>Produce maximum investment income to a wide variety of our clients, using an management approach in the global</div>,
    },
    {
        firstname: 'INNOCENT',
        lastname: 'PANGSOU',
        job: 'Director of Trading Department',
        img: Innocent,
        children: <div>Produce maximum investment income to a wide variety of our clients, using an management approach in the global</div>,
    },
    {
        firstname: 'BRIAND',
        lastname: 'YUNGONG',
        job: 'Director of IT Department',
        img: Briand,
        children: <div>Produce maximum investment income to a wide variety of our clients, using an management approach in the global</div>,
    },
];

const Products = ({ images }) => images.map(img => <div key={Math.random()} className="text-center">
    <img src={img} style={{ height: 60, width: 'auto' }} className="mx-auto" />
</div>);

const Cards = ({ cards }) => cards.map(({ children, img, title, subtitle, link, color, popular }) => <AppBlock key={Math.random()} img={img} title={title} subtitle={subtitle} link={link} color={color} popular={popular}>
    {children}
</AppBlock>);

const SectionTitle = ({ children, icon, subtitle, color = 'limo', small }) => <div className="d-flex align-items-center">
    <div className="pr-4">
        <div style={{ width: 104 }} className={'embed-responsive embed-responsive-1by1 rounded d-flex justify-content-center align-items-center text-' + color + ' bg-' + color + '-30'}>
            <FontAwesomeIcon icon={icon} size="3x" />
        </div>
    </div>

    <div>
        <div className="d-inline-block text-large text-secondary border-bottom border-border-50 text-300 pb-3 mb-3">{subtitle}</div>
        <div className={`text-${small ? "x" : "xx"}-large text-blue text-700`}>{children}</div>
    </div>
</div>;

export default class Home extends Component {
    render() {
        return (
            <div className="Home w-100">
                <div className="position-relative full-height-app d-flex flex-column" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .61), rgba(0, 0, 0, .61)), url(${BannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <Container className="flex-fill d-flex flex-column justify-content-center">
                        <Row className="justify-content-between align-items-center text-montserrat">
                            <Col lg={9}>
                                <div className="banner-text">
                                    <h4 className="text-700 text-center text-lg-left text-white">Welcome to</h4>
                                    <h1 className="text-700 text-center d-none d-sm-block text-lg-left text-white display-4">Global Investment Trading S.A</h1>
                                    <h2 className="text-700 text-center d-sm-none text-lg-left text-white">Global Investment Trading S.A</h2>

                                    <div className="w-60 d-none d-lg-block border-top border-lightblue mt-4 pt-4 pb-5 text-secondary">
                                        Changing the life of 20000 + clients accross the world.
                                    </div>

                                    <div className="d-lg-none border-top border-lightblue mt-4 pt-4 pb-5 text-center text-secondary">
                                        Changing the life of 20000 + clients accross the world.
                                    </div>

                                    <div className="text-center text-lg-left">
                                        <Link to="/about-us"><BetweenButton icon={faChevronRight} className="d-block mx-auto d-lg-inline-block py-3 px-4 mr-lg-2 mb-3 mb-lg-0" color="blue"><span>About <span className="text-700">Us</span></span></BetweenButton></Link>
                                        <Link to="/our-products"><BetweenButton icon={faChevronRight} className="d-block mx-auto d-lg-inline-block py-3 px-4 text-darkblue" color="soft"><span>Our <span className="text-700">Products</span></span></BetweenButton></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={1} className="d-none d-lg-block">

                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="bg-white py-5">
                        <Container>
                            <div className="d-xl-none">
                                <OwlCarousel ref="Our Products" options={{ responsive: { 0: { items: 2 }, 600: { items: 3 }, 800: { items: 4 }, 1000: { items: 5 }, 1200: { items: 7 }, 1550: { items: 12 } }, loop: true, dots: false }}>
                                    <Products images={images} />
                                </OwlCarousel>
                            </div>
                            <div className="d-none d-xl-flex justify-content-between align-items-center">
                                <Products images={images} />
                            </div>
                        </Container>
                    </Container>

                    <div className="d-flex justify-content-center py-3">
                        <div>
                            <div className="p-2 border-white-20 border rounded-pill" style={{ width: 38, height: 73 }}>
                                <div className="bg-white rounded-circle embed-responsive embed-responsive-1by1 w-100" />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ background: `url("${HomeBodyBg}") no-repeat center`, backgroundSize: 'cover' }}>
                    <Container className="vh-100 d-flex flex-column justify-content-center">
                        <Row className="align-items-center justify-content-between">
                            <Col lg={6}>
                                <Row className="justify-content-center">
                                    <Col lg={10} data-aos="fade-right">
                                        <SectionTitle subtitle="About Us" small icon={faBriefcase}>
                                            Know more about us
                                        </SectionTitle>
                                        <div className="py-4 text-secondary">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        </div>
                                        <Link className="d-block mx-auto d-lg-inline-block" to="/about-us"><BetweenButton icon={faChevronRight} pill className="py-3 px-4 mr-lg-2 mb-3 mb-lg-0" color="blue">Read more...</BetweenButton></Link>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={5} data-aos="fade-left">
                                <Row className="h-100 align-items-end position-relative">
                                    <Col lg={9} style={{ zIndex: 2 }}>
                                        <div className="p-3">
                                            <div className="rounded embed-responsive embed-responsive-4by3" style={{ background: `url("${CEO1}") no-repeat center`, backgroundSize: 'cover' }} />
                                        </div>

                                        <div className="bg-white rounded">
                                            <div className="bg-limo-10 rounded text-secondary p-3">
                                                <div>
                                                    <div className="text-uppercase text-montserrat text-blue text-large text-700">{'Simb Emile Parfait'}</div>

                                                    <div className="text-400">C.E.O, Founder and Crypto Trader</div>
                                                </div>

                                                <div className="my-3 border-bottom border-border" />

                                                <div>
                                                    <div><FontAwesomeIcon icon={faQuoteLeft} className="text-darkblue" size="lg" /></div>
                                                    <div className="p-2">{`
                                                    Produce maximum investment income  with minimal risk 
                                                    to a wide variety of our clients, using an innovative asset 
                                                    management approach in the global investment market.
                                                    `}</div>
                                                    <div className="text-right"><FontAwesomeIcon icon={faQuoteRight} className="text-darkblue" size="lg" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={7} className="position-absolute" style={{ zIndex: 1, top: 0, right: 0 }}>
                                        <div className="embed-responsive embed-responsive-16by9 rounded" style={{ background: `url("${BehindCEO}") no-repeat center`, backgroundSize: 'cover', transform: 'translateY(-50%)' }} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    <div className="bg-lightblue-10">
                        <Container className="vh-100 d-flex flex-column justify-content-center">
                            <SectionTitle subtitle="What we have achieved" icon={faDesktop}>
                                Find out our products
                            </SectionTitle>
                            <Row>
                                <Col lg={4}>
                                    <div className="py-4 text-secondary">
                                        Thanks to all our clients for believing in us. We still have a long way ahead of us. Check below what your trust in us has procued
                                </div>
                                </Col>
                            </Row>
                            <div className="py-5">
                                <OwlCarousel ref="Find out our products" options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 1100: { items: 3 }, 1550: { items: 4 } }, loop: true, dots: true }}>
                                    <Cards cards={cards} />
                                </OwlCarousel>
                            </div>
                        </Container>
                    </div>


                    <Container className="vh-100 d-flex flex-column justify-content-center">
                        <SectionTitle subtitle="We are devoted" icon={faUserFriends}>
                            Our Team
                        </SectionTitle>
                        <Row>
                            <Col lg={4}>
                                <div className="py-4 text-secondary">
                                    Thanks to all our clients for believing in us. We still have a long way ahead of us. Check below what your trust in us has procued
                                </div>
                            </Col>
                        </Row>
                        <div className="py-5">
                            <OwlCarousel ref="Our Team" options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 1200: { items: 3 } }, loop: true, dots: true, center: true }}>
                                <TeamBlock team={team} />
                            </OwlCarousel>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Link className="d-block d-lg-inline-block" to="/about-us#our-team"><BetweenButton icon={faChevronRight} pill className="py-3 px-4 mr-lg-2 mb-3 mb-lg-0" color="blue">View List</BetweenButton></Link>
                        </div>
                    </Container>
                </div>
            
                <div style={{ background: `url("${MapsBg}") no-repeat center`, backgroundSize: 'cover' }}>
                    
                </div>
            </div>
        );
    }
}
