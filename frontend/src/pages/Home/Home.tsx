import React from 'react'
import ProductPage from '../ProductPage/ProductPage'
import products from '../../data/products.json';

export default function Home() {
    return (
        <div>
            <ProductPage products={products}/>
        </div>
    )
}