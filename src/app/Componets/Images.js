import Image from 'next/image'
import React from 'react'

function Images() {
  return (
    <div className='row m-0'>
<div className="col-12 col-md-4 mt-5">
    <div className="card-custom">
        <Image width={100} height={100} alt='GK Truck Tyres' className='images-img' src={'/tyre-1.jpg'}/>
    </div>
</div>
<div className="col-12 col-md-4 mt-4 mt-md-5">
    <div className="card-custom">
        <Image width={100} height={100} alt='GK Truck Tyres' className='images-img' src={'/tyre-2.webp'}/>
    </div>
</div>
<div className="col-12 col-md-4 mt-4 mt-md-5">
    <div className="card-custom">
        <Image width={100} height={100} alt='GK Truck Tyres' className='images-img' src={'/tyre-3.png'}/>
    </div>
</div>
<div className="col-12 col-md-4 mt-4">
    <div className="card-custom">
        <Image width={100} height={100}  alt='GK Truck Tyres' className='images-img' src={'/tyre-4.webp'}/>
    </div>
</div>
<div className="col-12 col-md-4 mt-4">
    <div className="card-custom">
        <Image width={100} height={100} alt='GK Truck Tyres' className='images-img' src={'/tyre-5.jpg'}/>
    </div>
</div>
<div className="col-12 col-md-4 mt-4">
    <div className="card-custom">
        <Image width={100} height={100 } alt='GK Truck Tyres' className='images-img' src={'/tyre-6.jpg'}/>
    </div>
</div>


    </div>
  )
}

export default Images