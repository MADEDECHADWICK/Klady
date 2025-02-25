import React from 'react'
import Categories from '../product/Categories'
import { Button } from '../ui/button'


const LeftSide = () => {
  return (
    <div className='w-[180px] py-12 px-1'>
      <div className='py-2 px-2'>
      <h1 className='font-bold py-2'>Clothing</h1>
        <Categories title='Men' content='Choose your wear'/>
        <Categories title='Women' content='Choose your wear'/>
        <Categories title='Kids' content='Choose your wear'/>
      </div>

      <div className='button-container py-4 px-4'>
        <h1 className='font-bold'>Shoes</h1>
            <div className='flex space-x-4 px-2'> 
              <Button className='rounded-full'>Men</Button>
              <Button className='rounded-full'>Women</Button>
            </div>
            <div className='flex space-x-4 mt-3 px-2'> 
              <Button className='rounded-full'>Boys</Button>
              <Button className='rounded-full'>Girls</Button>
            </div>
      </div>
    </div>
  )
}

export default LeftSide