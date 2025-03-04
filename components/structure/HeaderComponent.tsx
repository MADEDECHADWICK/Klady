import Link from 'next/link'
import React from 'react'
import SearchBar from '../shared/SearchBar'
import Cart from '../shared/Cart'


const HeaderComponent = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-30 flex justify-between items-center py-2 px-4 border-b-2 border-gray-300 ">
      <h1 className="text-3xl font-bold">KLADY</h1>
      <div className='hidden md:block max-w-l'>
          <SearchBar/>
      </div>
      
      <nav>
        <ul className="flex space-x-4">
          <li className='text-l'><Link href="/" className="hover:underline">Home</Link></li>
          <Cart/>
          <li className='text-l'><a href="/contact" className="hover:underline">Contact</a></li>
          <li className='text-l'><a href="/account" className="hover:underline">Account</a></li>
          <li className='text-l'><a href="/login" className="hover:underline">Login</a></li>
          <li className='text-l'><a href="/signup" className="hover:underline">SignUp</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent