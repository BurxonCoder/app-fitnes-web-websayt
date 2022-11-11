import React from 'react'
import  './FooterStyle.css';
import { FaFacebook,FaLinkedin,FaInstagram,FaPhone,FaMailBulk,FaTwitter, FaSearch,  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearch size={20} style={{color: '#ffffff',marginRight:'2rem'}} />
                <div>
                    <p>Toshken Shaxar</p>
                    <p>Parkentski</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff',marginRight:'2rem'}}/>+998(99)627-74-07</h4>
                </div>
                <div className='gamil'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff',marginRight:'2rem'}} />burxonfozilov77@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit.
                     Et saepe nostrum vero rem non
                      pariatur dicta, voluptatum at
                       quaerat earum totam fugit, cons
                          equuntur laboriosam. Neque.</p>
                          <div className='social'>
                            <FaFacebook size={30} style={{color: '#ffffff',marginRight:'1rem'}}/>
                            <FaTwitter size={30} style={{color: '#ffffff',marginRight:'1rem'}}/>
                            <FaLinkedin size={30} style={{color: '#ffffff',marginRight:'1rem'}}/>
                            <FaInstagram size={30} style={{color: '#ffffff',marginRight:'1rem'}}/>
                          </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer