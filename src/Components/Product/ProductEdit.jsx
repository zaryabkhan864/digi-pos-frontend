import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'


const ProductEdit = (props) => {
    const location = useLocation();
    console.log(location)
    return (
        <Fragment>
            {console.log(useLocation().state)}
            {console.log(props.productId)}
            <div>ProductEdit {props.productId}</div>
        </Fragment>
    )
}

export default ProductEdit