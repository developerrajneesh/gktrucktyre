import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div  className='d-flex gap-sm-3 flex-wrap px-3 justify-content-between'>
          <p style={{fontSize:"14px"}} className='m-0'> Phone: 9161422065</p> 
          <p style={{fontSize:"14px"}} className='m-0'>Email: developer.rajneeshshukla@gmail.com</p>
       
    </div>
  )
}

export default Header