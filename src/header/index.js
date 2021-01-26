import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import "./style.css";

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header_start">

            <Navbar light expand="md">

                <Container>
                    <img className="logo_header" src="images/logo.png" />
                    <NavbarToggler onClick={toggle} />

                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="mr-auto" navbar>


                            <NavItem onClick={() => {
                                // window.top.location.href()
                                setIsOpen(false)
                            }} className="navlinks_names">
                                <Link to={`/`}>
                                    <NavLink className="navlinks_names" >Home</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/aboutus'>
                                    <NavLink >About us</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/services'>
                                    <NavLink >Services</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/contactus'>
                                    <NavLink >Contact Us</NavLink>
                                </Link>
                            </NavItem>


                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>

        </div>




    );
}

export default Example;