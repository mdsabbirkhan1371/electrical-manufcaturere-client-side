import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../images/logo/company.jpg'
import { Link } from "react-router-dom";
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Button from 'react-bootstrap/Button';
import { signOut } from 'firebase/auth';
const Header = () => {

    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <Container>
                    <Navbar.Brand as={Link} to='/home'>
                        <img style={{ width: '100px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='fs-5 fw-semibold' id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/tools'>Tools/Parts</Nav.Link>
                            <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                            {/* <Nav.Link as={Link} to='/business'>Business_Summary</Nav.Link> */}
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
                            <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Button onClick={logout} variant="primary">Sign Out</Button>
                                    :
                                    <>
                                        <Nav.Link as={Link} to='signup'>Sign Up</Nav.Link>
                                        <Nav.Link as={Link} to='signin'>Sign In</Nav.Link>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;