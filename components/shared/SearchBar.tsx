import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 import React from 'react'
 
 const SearchBar = () => {
   return (
     <form className='flex  items-stretch h-10' >
      <Select>
      <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r  rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none'>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
    <Input
        className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
        placeholder=""
        name='q'
        type='search'
      />
      <button
        type='submit'
        className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2 '
      >
        <SearchIcon className='w-6 h-6' />
      </button>

     </form>
   )
 }
 
 export default SearchBar