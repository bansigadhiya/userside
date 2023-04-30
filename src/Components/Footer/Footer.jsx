import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Envelope, EnvelopeFill, Facebook, GeoAltFill, Instagram, Linkedin, Phone, PhoneFill, Twitter } from 'react-bootstrap-icons';
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer className='bg-primary py-5 text-light'>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <div className="col-4 social">
                            <h2>User</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ctetur adipisicing elit.Laboriosam neque aperiam repellat cum? Iure odio atque commodi </p>
                            <div>
                                <ul className='d-flex list-unstyled'>
                                    <li className='me-2'>
                                        <a href="#" className='text-primary bg-light icon'><Instagram /></a>
                                    </li>
                                    <li className='mx-2'>
                                        <a href="#" className='text-primary bg-light icon'><Facebook /></a>
                                    </li>
                                    <li className='mx-2'>
                                        <a href="#" className='text-primary bg-light icon'><Twitter /></a>
                                    </li>
                                    <li className='mx-2'>
                                        <a href="#" className='text-primary bg-light icon'><Linkedin /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4 links ps-5">
                            <h5>Important Links</h5>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Product</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 contact">
                            <h5>Contact Info</h5>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href="#"><PhoneFill className='me-2'/>+7854326981</a>
                                </li>
                                <li>
                                    <a href="#"><EnvelopeFill className='me-2'/>user@gmail.com</a>
                                </li>
                                <li>
                                    <a href="#"><GeoAltFill className='me-2'/>surat , gujrat.</a>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
