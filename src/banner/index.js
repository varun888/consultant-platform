import React from 'react';
import { Col, Container, Row, Button, Card, } from 'reactstrap';
import './style.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export const Banner = (props) => {
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


            <div className="before_container_about_us">
                <Container>
                    <Row>
                        <Col md="6" sm="12" className="left_part_about_us_section">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum, lacinia est id, dapibus sapien. Etiam non mi diam. Nam massa mauris, viverra et turpis id, lobortis pretium diam. Aenean eu congue lacus. Etiam imperdiet orci vel ligula ultricies, eget dictum justo congue. Nunc sed aliquam orci. Morbi quam nibh, pulvinar ac rutrum a, interdum vitae arcu.</p>
                            <Link to='/aboutus'>
                                <Button className="custom_button">Read More</Button>
                            </Link>
                        </Col>

                        <Col className="right_section_about_us" md="6" sm="12">
                            <Row>
                                <Col className="first_two_images_about_us" md="6" sm="12">
                                    <div className="about_us_images_section">
                                        <img src="images/hotel-room.png" alt="" />
                                    </div>

                                    <div className="image-margin-top">
                                        <img src="images/hotel-room.png" alt="" />
                                    </div>
                                </Col>

                                <Col className="third_image_about_us_section" md="6" sm="12">
                                    <img src="images/right.png" />
                                </Col>


                                <Col className="last_image_about_us_section" md="12">
                                    <div className="image-last_about_us_section">
                                        <img src="images/bottom.png" alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="start_our_service_section" style={{ backgroundImage: 'url(/images/our-services.jpg)', width: "100%", textAlign: "center", padding: "50px" }}>

                <Container>
                    <h1 className="heading_our_services">Our Services</h1>

                    <Row>
                        <Col md="4" sm="12">
                            <Card className="our_services_section_card">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper.</p>
                                <a href="content">Read More</a>
                            </Card>
                        </Col>

                        <Col md="4" sm="12">
                            <Card className="our_services_section_card">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper.</p>
                                <a href="content">Read More</a>
                            </Card>
                        </Col>

                        <Col md="4" sm="12">
                            <Card className="our_services_section_card">
                                <h4>Hotel Booking</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper.</p>
                                <a href="content">Read More</a>
                            </Card>
                        </Col>
                    </Row>
                    <Link to='/services'>
                        <Button className="custom_button_our_services_secton">Read More</Button>
                    </Link>
                </Container>

            </div>

            <div className="gallery_main_section">
                <Container>
                    <div className="gallery_section">
                        <h1>Gallery</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum<br></br> sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper.<br></br>Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum.</p>
                    </div>

                    <div className="gallery_image_section">
                        <Row>
                            <Col className="gallery_section_images" md="4">

                                <img src="images/gallery-image-1.png" alt="" />
                            </Col>

                            <Col className="gallery_section_images" md="4">
                                <img src="images/gallery-image-2.png" alt="" />
                            </Col>

                            <Col className="gallery_section_images" md="4">
                                <img src="images/gallery-image-3.png" alt="" />
                            </Col>
                        </Row>

                        <div className="second_section_gallery">
                            <Row>
                                <Col className="gallery_section_images" md="4">

                                    <img src="images/gallery-image-4.png" alt="" />
                                </Col>

                                <Col className="gallery_section_images" md="4">
                                    <img src="images/gallery-image-5.png" alt="" />
                                </Col>

                                <Col className="gallery_section_images" md="4">
                                    <img src="images/gallery-image-6.png" alt="" />
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <Button className="custom_button">Read More</Button>
                </Container>
            </div>

            <div className="rewiew_section_main">
                <Container>

                    <div className="rewiew_section">
                        <h3>Some Words From Our Happy Clients.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum<br></br> sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper.<br></br>Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum.</p>

                        <Slider {...settings}>
                            <div>
                                <div className="rewiew_section_part">
                                    <div className="client_image_rewiew_section">
                                        <img src="images/review-section.png" alt="" />
                                    </div>

                                    <div className="client_message_rewiew_section">
                                        <h4>Mr. James Bond</h4>
                                        <p className="profile_client">UX Designer</p>

                                        <p><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum."</i></p>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="rewiew_section_part">
                                    <div className="client_image_rewiew_section">
                                        <img src="images/review-section.png" alt="" />
                                    </div>

                                    <div className="client_message_rewiew_section">
                                        <h4>Mr. James Bond</h4>
                                        <p className="profile_client">UX Designer</p>

                                        <p><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum."</i></p>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="rewiew_section_part">
                                    <div className="client_image_rewiew_section">
                                        <img src="images/review-section.png" alt="" />
                                    </div>

                                    <div className="client_message_rewiew_section">
                                        <h4>Mr. James Bond</h4>
                                        <p className="profile_client">UX Designer</p>

                                        <p><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper. Maecenas egestas dui ac ante dictum convallis. Morbi nec nulla bibendum."</i></p>

                                    </div>

                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </div>

        </>
    )
}