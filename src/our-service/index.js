// import { Button } from 'bootstrap';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Card, Col, Container, Row, Button } from 'reactstrap';
import './style.css';

export const Ourservice = () => {
    var settings = {

    };

    return (
        <>
            <div className="banner_section">
                <Row>
                    <Col className="banner_image_left" md="10" sm="12">
                        <Slider {...settings}>
                            <img src="images/banner_image.jpg" alt="" />
                            <img src="images/banner_image.jpg" alt="" />
                            <img src="images/banner_image.jpg" alt="" />
                            <img src="images/banner_image.jpg" alt="" />
                            <img src="images/banner_image.jpg" alt="" />
                        </Slider>
                    </Col>

                    <Col md="2" sm="12">
                        <div className="icons_banner">
                            <a className="banner_social_icon" href="facebook"><FaFacebookF /></a>
                            <a className="banner_social_icon" href="linkedin"><FaLinkedinIn /></a>

                            <a className="banner_social_icon" href="twitter"><FaTwitter /></a>

                            <a className="banner_social_icon" href="instagram"><FaInstagram /></a>
                        </div>
                    </Col>
                </Row>
            </div>

            <Container>
                <div className="our_services_section">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh, pulvinar ac rutrum a, interdum vitae arcu.</p>
                </div>
            </Container>


            <div className="images_section_our_service">
                <Container>
                    <Row>
                        <Col className="images_our_services" md="4" sm="12">
                            <img src="images/gallery-image-1.png" alt="" />
                            <div className="text_in_image_our_service">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                                <Button>Book Now</Button>
                            </div>
                        </Col>

                        <Col className="images_our_services" md="4" sm="12">
                            <img src="images/gallery-image-2.png" alt="" />
                            <div className="text_in_image_our_service">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                                <Button>Book Now</Button>
                            </div>
                        </Col>

                        <Col className="images_our_services" md="4" sm="12">
                            <img src="images/gallery-image-3.png" alt="" />
                            <div className="text_in_image_our_service">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                                <Button>Book Now</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="images_our_services_2nd_section" md="4" sm="12">
                            <img src="images/gallery-image-4.png" alt="" />
                            <div className="text_in_image_our_service">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                                <Button>Book Now</Button>
                            </div>
                        </Col>

                        <Col className="images_our_services_2nd_section" md="4" sm="12">
                            <img src="images/gallery-image-5.png" alt="" />
                            <div className="text_in_image_our_service">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                                <Button>Book Now</Button>
                            </div>
                        </Col>

                        <Col className="images_our_services_2nd_section" md="4" sm="12">
                            <img src="images/gallery-image-6.png" alt="" />
                            <div className="text_in_image_our_service">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                                <Button>Book Now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="our_special_services_section">
                <Container>
                    <h2>Our Special Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh,</p>
                    {/* <Button>Book Now</Button> */}
                    <Row>
                        <Col className="our_special_services_cards" md="3" sm="6">
                            <Card className="card_our_special_services">
                                <img src="images/wifi-1.png" alt="" />
                                <h5>Free Wifi</h5>
                            </Card>
                        </Col>

                        <Col md="3" sm="6">
                            <Card className="card_our_special_services">
                                <img src="images/air-condition-2.png" alt="" />
                                <h5>Air Conditioner</h5>
                            </Card>
                        </Col>

                        <Col md="3" sm="6">
                            <Card className="card_our_special_services">
                                <img src="images/mini-bar-3.png" alt="" />
                                <h5>Mini Bar</h5>
                            </Card>
                        </Col>

                        <Col md="3" sm="6">
                            <Card className="card_our_special_services">
                                <img src="images/airport-pickup-4.png" alt="" />
                                <h5>Airport Pickup</h5>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className="after_our_special_services_Section">
                <Container>
                    <h4>Don't see what you're Looking for? just ask. we may call it by another name.</h4>
                    <Link to='/contactus'>
                    <Button>Get In Touch</Button>
                    </Link>
                </Container>
            </div>

        </>
    )
}