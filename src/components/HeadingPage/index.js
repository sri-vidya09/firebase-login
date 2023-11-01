import React from 'react'

const HeadingPage = props=>{
    const {headingDetails}=props
    const{ menuCategory} = headingDetails

    return(
        <li>
            {menuCategory}
        </li>
    )
}


export default HeadingPage