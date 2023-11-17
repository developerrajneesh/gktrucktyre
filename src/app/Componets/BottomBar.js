import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { FcGallery } from 'react-icons/fc'
import { MdContacts } from 'react-icons/md'
import { GrServices } from 'react-icons/gr'

function BottomBar() {
  return (
    <div className='d-flex justify-content-between align-items-center bottobar-position '>

        <div  className='d-flex  p-2 bg-light flex-column justify-content-center align-items-center'>
        <MdContacts size={20}/>
        <p className="m-0">Contact</p>
        </div>
        <div   className='d-flex  p-2 bg-light flex-column justify-content-center align-items-center'>
        <SiAboutdotme size={20}/>
        <p className="m-0">About</p>
        </div>
        <div   className='d-flex p-2 bg-light flex-column justify-content-center align-items-center'>
        <AiFillHome size={20}/>
        <p className="m-0">Home</p>
        </div>
        <div  className='d-flex p-2 bg-light flex-column justify-content-center align-items-center'>
        <GrServices size={20}/>
        <p className="m-0">Services</p>
        </div>
       <div  className='d-flex p-2 bg-light flex-column justify-content-center align-items-center'>
       <FcGallery size={20}/>
       <p className="m-0">Gallery</p>
       </div>
    </div>
  )
}

export default BottomBar