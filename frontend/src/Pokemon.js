import React from 'react'
import { useParams } from 'react-router-dom'
const Pokemon=()=>{
    const {pokeid} =useParams()
    return(
        <div>
           <h1>This is Pokemon page {pokeid}</h1> 
        </div>
    )
}

export default Pokemon