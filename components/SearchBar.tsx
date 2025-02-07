import React from 'react'
import { Button } from './ui/button'

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-500 rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="What's in your mind..."
        className="p-2 w-full border-none focus:outline-none focus:ring-2 focus:ring-grey-500"
      />
     <Button type="submit" className="bg-white" size="lg">Search</Button>
    </div>
  )
}

export default SearchBar