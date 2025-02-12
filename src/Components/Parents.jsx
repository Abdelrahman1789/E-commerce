import React, { useState } from 'react'
import Child from './Child'
import Brands from './Brands/Brands'

export default function Parents() {
    const date =30
    const names=['Abdelrhman','Hassan']
  return (
   
    <ul>
        {names.map((ele)=><List ele={ele} key={ele}></List>)}
    </ul>
  )
}
function List({ele}){
    return <li>{ele}</li>
}
