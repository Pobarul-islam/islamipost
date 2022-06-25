import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';



const Sidebar = () => {
    const [sidebarDatas, setSidebarDatas] = useState([])
    useEffect(()=>{
        fetch("service.json")
        .then(res=> res.json())
        .then(data=> setSidebarDatas(data))
    },[])
    return (
        <div>
         <h3>{sidebarDatas.length}</h3>
           
           {
            sidebarDatas.map(sidebarData=><SidebarRow
            key={sidebarData.id}
            sidebarData={sidebarData}
            ></SidebarRow>)
           }
        </div>
    );
};

export default Sidebar;