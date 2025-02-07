import React from 'react'
import Categories from './Categories'
import { Button } from './ui/button'

const LeftSide = () => {
  return (
    <div className='w-[200px]'>
      <div className='py-2 px-2'>
      <h1 className='font-bold'>Clothing</h1>
        <Categories title='Men' content='Choose your wear'/>
        <Categories title='Women' content='Choose your wear'/>
        <Categories title='Kids' content='Choose your wear'/>
      </div>

      <div className='button-container py-4'>
        <h1 className='font-bold'>Shoes</h1>
            <div className='flex space-x-4 px-2'> 
              <Button>Men</Button>
              <Button>Women</Button>
            </div>
            <div className='flex space-x-4 mt-3 px-2'> 
              <Button>Boys</Button>
              <Button>Girls</Button>
            </div>
      </div>
    </div>
  )
}

export default LeftSide