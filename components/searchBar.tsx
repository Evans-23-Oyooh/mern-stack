"use client"
import { useActionState, useState } from 'react'
import React from 'react'
import SearchManufacturer from './SearchManufacturer'

export const searchBar = () => {
    const [manufacture,setManufacturer] = 
    useState('');
    const handleSearch =() => {}
  return (
    <form className='seacrchbar' onSubmit={handleSearch}>
<div className='searchbar__items'>
    <SearchManufacturer
    manufacture={manufacture}
    setManufacturer={setManufacturer} />
</div>
    </form>
  )
}
export default searchBar