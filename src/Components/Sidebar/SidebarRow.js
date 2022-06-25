import React from 'react';
import { Card } from 'react-bootstrap';
import './SidebarRow.css'
const SidebarRow = ({sidebarData}) => {
    const {img, title, time, subtitle} = sidebarData;
    return (
        <div className='sidebarRow col-3'>
          
          <div>
          <img className='sidebarimg' src={img} alt="" />
          </div>
          <div className='sidebartext'>
          <h5>{title}</h5> 
           <p>{subtitle}</p>
           <p>{time}</p>
          </div>
           </div>
         
     

        
    );
};

export default SidebarRow;