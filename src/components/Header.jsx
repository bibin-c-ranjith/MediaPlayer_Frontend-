import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
          <Navbar className="">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px ',fontWeight:'bolder'}}><i class="fa-brands fa-medium fa-beat text-warning  ms-2 me-3"></i>{' '}
            Media <span className='text-warning'>Player</span></Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header