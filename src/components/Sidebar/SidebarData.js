import React from 'react'
import {BsFillGrid1X2Fill,BsFillGearFill } from "react-icons/bs";

const SidebarData = [
    {
        id: 1,
        path: '/dashboard',
        icon:<BsFillGrid1X2Fill/>,
        name : 'Dashbord',
        
    },
    {
        id: 2,
        path: '/setting',
        icon:<BsFillGearFill/>,
        name : 'Setting',
        
    }
]

export default SidebarData;