import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <header className='bg-light shadow-sm py-2'>
      <Container>
        <Row className='align-items-center'>
          <div className='col-2'>
            <h3 className='text-primary'>User</h3>
          </div>
          <div className='col-10 d-flex justify-content-end'>
            <nav>
              <ul className='d-flex list-unstyled m-0'>
                <li>
                  <a href='#' className='text-primary text-decoration-none px-3'>Home</a>
                </li>
                <li>
                  <a href='#' className='text-primary text-decoration-none px-3'>Products</a>
                </li>
                <li>
                  <a href='#' className='text-primary text-decoration-none px-3'>About</a>
                </li>
              </ul>
            </nav>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
