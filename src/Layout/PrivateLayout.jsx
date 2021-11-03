import React from 'react'
import Navbars from '../Components/Navbars'
import PrivateRoutes from '../Components/PrivateRoutes'
import Sidebars from '../Components/Sidebars'

const PrivateLayout = ({children}) => {
    return (
        <div className="">
            <PrivateRoutes>
            <Navbars/>
            <div className="flex w-full">
            {children}

            </div>
            
        </PrivateRoutes>

        </div>
    )
}

export default PrivateLayout
