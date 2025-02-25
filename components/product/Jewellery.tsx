import React from 'react'
import MyImage from '../shared/MyImage'
import { Button } from '../ui/button'

const Jewellery = () => {
  return (
    <div>
      <h1 className='font-bold py-2'>Jewellery</h1>
        <h2>New arriivals!!</h2>
      <div className='py-2'>
        <MyImage src="/images/jewel.jpeg" alt="jewel" width={150} height={100} className='object-cover'/>
      </div>
      <div>
        <h3>
          Check out our affordable, authentic and long lasting jewels
        </h3>
        <div className='py-2'>
         <Button className='rounded-full'>Jewels</Button>
        </div>
      </div>
    </div>
  )
}

export default Jewellery