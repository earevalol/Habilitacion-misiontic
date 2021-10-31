import React from 'react'
import PrivateRoutes from '../Components/PrivateRoutes'

const PrivateLayout = ({children}) => {
    return (
        <PrivateRoutes>
            <div>
            este es mi PrivateRoute
            {children}
            </div>
        </PrivateRoutes>
    )
}

export default PrivateLayout
