
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Slider from 'react-slick';
import { Col, Container, Row } from 'reactstrap';
import './style.css';

export const AboutUs = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                <div className="after_banner_section">
                    <h2>Since 2020 year</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh, pulvinar ac rutrum a, interdum vitae arcu.</p>

                </div>
            </Container>

            <div className="specification_section">
                <Container>
                    <Row>
                        <Col className="specification_ist_line" md="4" sm="12">
                            <div className="image_background_specification">
                                <img src="images/about-us 1.png" alt="" />
                            </div>
                            <h4>High Rating</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>

                        </Col>
                        <Col className="specification_ist_line" md="4" sm="12">
                            <div className="image_background_specification">
                                <img src="images/about-us 2.png" alt="" />
                            </div>
                            <h4>Quiet Hours</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                        </Col>

                        <Col className="specification_ist_line" md="4" sm="12">
                            <div className="image_background_specification">
                                <img src="images/about-us 3.png" alt="" />
                            </div>
                            <h4>Best Locations</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="specification_2nd_line" md="4" sm="12">
                            <div className="image_background_2nd_line_specification">
                                <img src="images/about-us 4.png" alt="" />
                            </div>
                            <h4>Free Cancellation</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>

                        </Col>

                        <Col className="specification_2nd_line" md="4" sm="12">
                            <div className="image_background_2nd_line_specification">
                                <img src="images/about-us 5.png" alt="" />
                            </div>
                            <h4>Payment Options</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                        </Col>

                        <Col className="specification_2nd_line" md="4" sm="12">
                            <div className="image_background_2nd_line_specification">
                                <img src="images/about-us 6.png" alt="" />
                            </div>
                            <h4>Special Offers</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="things_to_do_near_section">
                <Container>
                    <h2>Things To Do Near</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh, pulvinar ac rutrum a, interdum vitae arcu.</p>

                    <Row>
                        <Col className="images_section_to_do_near" md="4" sm="12">
                            <img src="images/gathering.png" alt="" />
                            <div className="text_in_image">
                                <h4>Gathering</h4>
                            </div>
                        </Col>

                        <Col className="images_section_to_do_near" md="4" sm="12">
                            <img src="images/nice food.png" alt="" />
                            <div className="text_in_image">
                                <h4>Gathering</h4>
                            </div>
                        </Col>

                        <Col className="images_section_to_do_near" md="4" sm="12">
                            <img src="images/explore.png" alt="" />
                            <div className="text_in_image">
                                <h4>Gathering</h4>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>
            <div className="amazing_stay_section">
                <Container>
                    <Slider {...settings}>
                        <div className="amazing_stay_section_part">
                            <h2>Amazing Stay</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh, pulvinar ac rutrum a, interdum vitae arcu.</p>
                            <a href="Jemima">Jemima Sentiago</a>
                        </div>

                        <div className="amazing_stay_section_part">
                            <h2>Amazing Stay</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh, pulvinar ac rutrum a, interdum vitae arcu.</p>
                            <a href="Jemima">Jemima Sentiago</a>
                        </div>

                        <div className="amazing_stay_section_part">
                            <h2>Amazing Stay</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh, pulvinar ac rutrum a, interdum vitae arcu.</p>
                            <a href="Jemima">Jemima Sentiago</a>
                        </div>

                        <div className="amazing_stay_section_part">
                            <h2>Amazing Stay</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh, pulvinar ac rutrum a, interdum vitae arcu.</p>
                            <a href="Jemima">Jemima Sentiago</a>
                        </div>
                    </Slider>
                </Container>
            </div>
        </>
    )
}