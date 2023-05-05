import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
    
    
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <div className='text-center my-5'>
                <img src={logo} />
                <h5 className='mt-4' style={{color: '#706F6F'}}>Journalism Without Fear or Favour</h5>
                <p className='fs-5 fw-semibold' style={{color: '#706F6F'}}>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex align-items-center bg-light rounded-2 p-2 mb-5'>
                <Button variant="danger" onClick={handleShow}>Latest</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
                <Marquee speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            <Navbar bg="dark" variant="dark" className='rounded-2 my-5'>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <div>
                        <span className='text-white me-4'>Profile</span>
                        <Button variant="danger">Login</Button>
                    </div>
            </Container>
        </Navbar>
        </Container>
    );
};

export default Header;