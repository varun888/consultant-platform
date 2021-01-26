
import React from 'react';
import { Col, Container, Row, Button, Card, Input, Ul, NavItem, NavLink } from 'reactstrap';
import '../banner/style.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Slider from 'react-slick';

export const Footer = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
 
            <div className="main_get_in_touch_section">
                <Container>
                    <Row>
                        <Col className="get_in_touch_section" md="6" sm="12">
                            <h2>Get In Touch</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Phasellus placerat auctor ipsum sollicitudin vestibulum.<br></br> Mauris gravida posuere</p>

                            <a className="social_icon_get_in_touch_section" href="mail">
                                <AiOutlineMail />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Phasellus placerat auctor ipsum sollicitudin vestibulum.<br></br></p>
                            </a>

                            <a className="social_icon_get_in_touch_section" href="phone">
                                <BsPhone />
                                <p>9876543210</p>
                            </a>

                            <a className="social_icon_get_in_touch_section" href="location">
                                <GoLocation />
                                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>


                        </Col>

                        <Col md="6" sm="12">
                            <div className="right_section_get_in_touch">
                                <Card className="card_get_in_touch_section">
                                    <h3>Say Something</h3>
                                    <Input type="text" placeholder="Name"></Input>

                                    <Input type="email" placeholder="Email Address"></Input>

                                    <Input type="text" placeholder="Phone No."></Input>
                                    <textarea placeholder="Message" className="form-control" rows={4} />
                                    {/* <Input type="message" placeholder="Message" ></Input> */}

                                    <Button className="custom_button form_submit_button">Submit</Button>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className="footer_section">
                <Container>
                    <Row>

                        <Col className="footer_logo" md="4">
                            <img src="images/logo-footer.png" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper.</p>
                            <a href="">Read More</a>
                        </Col>

                        <Col className="footer_about_us" md="4">
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat auctor ipsum sollicitudin vestibulum. Mauris gravida posuere magna in ullamcorper.</p>
                            <a href="">Read More</a>
                        </Col>

                        <Col className="footer_social_icons" md="4">

                            <div className="main_section_icons_footer">
                                <a className="icons_footer" href="social-icons"><FaFacebookF /></a>

                                <a className="icons_footer" href="social-icons"><FaLinkedinIn /></a>

                                <a className="icons_footer" href="social-icons"><FaTwitter /></a>

                                <a className="icons_footer" href="social-icons"><FaInstagram /></a>

                            </div>


                            <div className="footer_navigation">
                                <NavItem>
                                    <NavLink href="/home/">Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/about us/">About Us</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/services/">Services</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/contact/">Contact Us</NavLink>
                                </NavItem>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </footer>


        </>
    )
}