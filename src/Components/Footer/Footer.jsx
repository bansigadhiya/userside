import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Instagram } from 'react-bootstrap-icons'

function Footer() {
    return (
        <div>
            <footer className='bg-primary py-5 text-light'>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <div className="col-4">
                            <h2>User</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="#" className='text-primary bg-light'><Instagram /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
