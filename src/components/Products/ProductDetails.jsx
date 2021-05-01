import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { productsContext } from '../../contexts/ProductsContext';

const ProductDetails = () => {
    const { id } = useParams()
    const { productDetails, getProductDetails } = useContext(productsContext)
    
    useEffect(() => {
        getProductDetails(id)
    }, [])


    return (
        <div>
            {productDetails.title}
        </div>
    );
};

export default ProductDetails;