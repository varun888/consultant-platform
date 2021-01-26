
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Slider from 'react-slick';
import { Col, Container, Row, } from 'reactstrap';
import './style.css';
import GoogleMapReact from 'google-map-react';

export const Contactus = () => {
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

            <div className="map_contact_us_page">
                <Container>
                    <div>
                        <Row>
                            <Col className="map_section" md="12">
                                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chandigarh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>


        </>
    )
}