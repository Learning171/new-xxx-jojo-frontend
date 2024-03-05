import { ShoppingCart } from 'lucide-react'
import React from 'react'
import SkeletonProductInfo from './SkeletonProductInfo'

function ProductInfo({product}) {
  return (
    <div>
    {product?<div>
      <h2 className='text-[20px]'>{product?.name}</h2>
      <h2 className='text-[15px] text-primary'>{product?.category}</h2>
      <h2 className='text-[15px] mt-5 text-primary'>{product?.description}</h2>
      <h2 className='text-[32px] mt-5 font-medium text-primary'>Rs.{product?.price}</h2>
      <button className='flex gap-2 p-4 bg-primary px-10 mt-5 hover:bg-blue-700 text-white rounded-lg'>
        <ShoppingCart />
        Add to Cart
      </button>
    </div>:
    <SkeletonProductInfo />}
    </div>
  )
}

export default ProductInfo


