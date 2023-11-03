import React from 'react'
import "./index.css"

const AllTabView = props=>{
    const {headingDetails}=props
    const{ menuCategory} = headingDetails

    return(
        <div>
           <li className='list-items'>
            <button className='button-tab'>
                 {menuCategory}
            </button>
           
           </li> 
        </div>
        
    )
}


export default AllTabView