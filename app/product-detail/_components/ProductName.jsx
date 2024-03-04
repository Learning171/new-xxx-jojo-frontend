import React from 'react'

function ProjcetName({product}) {
    const imageUrl = product?.images?.[0]?.url;

    const baseUrl = 'http://localhost:8000';
  return (
    <div className='w-full'>
    {product?<div>    
      {imageUrl && <img src={`${baseUrl}${imageUrl}`} 
      alt="Product Image" 
      width={400} 
      height={400}
      className='rounded-lg object-cover'
        />}
    </div>:
    <div className='h-[350px] w-[350px] bg-slate-200 animate-pulse'>
    </div>}
    </div>
  )
}

export default ProjcetName
