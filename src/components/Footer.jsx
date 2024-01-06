import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'500px', height:'300px'}} className='d-flex justify-content-center align-items-center flex-column w-100 mt-5  '>
        <div className='footer d-flex justify-content-center align-items-center w-100 mb-5 me-5 ' >
        <div className="website mb-3 " style={{width:'400px'}}>
            <h4><i class="fa-brands fa-medium fa-beat text-warning me-2 ms-3"></i>{' '}
            Media Player</h4>
            <h6 className=' mt-4 me-4 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam officiis, cupiditate necessitatibus facilis tenetur minima autem, excepturi !</h6>
           
            </div>
            
            <div className="links d-flex flex-column mb-4">
                <h3 className='mb-4'>Links</h3>
                <Link to={'/'} style={{textDecoration:'none' ,color:'white'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none' ,color:'white'}}>Home</Link>
                <Link to={'/watch-history'} style={{textDecoration:'none' ,color:'white'}}>Watch History</Link>
                </div>
                <div className="guides d-flex flex-column ms-4 mb-4">
                    <h4 className='mb-4'>Guides</h4>
                    <Link to={'https://react.dev/'} style={{textDecoration:'none' ,color:'white'}}>React</Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none' ,color:'white'}}>Bootswatch</Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none' ,color:'white'}}>React Bootstrap</Link>
                </div>
                    <div className="contact ms-5 mb-3 me-2">
                        <h4 className='mb-4'>Contact Us</h4>
                    <div className='d-flex mb-4'>
                <input type="text" className='form-control' placeholder='Enter Your Email Id' />
        <button className='btn btn-warning text-white ms-2'>Subscribe</button>
        </div>
        <div className='icons d-flex justify-content-evenly'>
            <Link to={'https://react.dev/'} style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                    <Link to={'https://bootswatch.com/'} style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-github fa-2x"></i></Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
        </div>
                     
                       
                    </div>
                
           
       
        </div>
        <p>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer