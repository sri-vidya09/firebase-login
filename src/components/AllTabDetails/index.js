import React from 'react'

const AllTabDetails=props=>{

    const {detailView} = props 
    const{menuCategory,menuCategoryImage} = detailView
  return (
    <div>
        <li>
            {menuCategory}
        </li>
        <img src={menuCategoryImage} alt="menu-category"/>
    </div>
  )
}

export default AllTabDetails