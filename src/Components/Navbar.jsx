import React, { useEffect, useState } from 'react'
import './Style/Navbar.css'
function Navbar() {
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return()=>{
            window.removeEventListener('scroll')
        }
    },[])
  return (
    <div className= {`navbar ${show && "nav_black"}`}>
  <img className='nav_logo' src = "https://th.bing.com/th?id=OIP.TTCgnTjm3-P-qjGSCmgBCAHaEH&w=335&h=186&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt = "netflix"/>
  <img className='nav_avatar' src = "https://th.bing.com/th/id/OIP.i2HBuWmNU78kbh4kUkDr7gAAAA?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt = "logo"/>
    </div>
  )
}

export default Navbar

