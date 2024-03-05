import React from 'react';
import ProductImage from './ProductImage';
import { ArrowDownNarrowWide } from 'lucide-react';
import Link from 'next/link';

function ProductItem({ product }) {
  // Check if images array exists and has at least one element
  const imageUrl = product?.images?.[0]?.url;

  const baseUrl = 'http://localhost:8000';

  return (
    <Link href={'/products/'+product.id}>
    <div className='hover:border p-1 rounded-lg border-primary'>
      {imageUrl && <img src={`${baseUrl}${imageUrl}`} 
      alt="Product Image" 
      width={400} 
      height={350}
      className='rounded-t-lg h-[200px]'
        />}
      <div className='flex justify-between items-center bg-gray p-3 rounded-b-lg'>
      <div className=''>
        <h2 className='text-[14px] fount-medium line-clamp-2'>{product.name}</h2>
        {product?.category&&<h2 className='text-[12px] text-secondary flex gap-2'>
            <ArrowDownNarrowWide className='h-4 w-4'/>{product?.category}</h2>}
      </div>
      <h2 className='font-medium'>RS.{product.price}</h2>
      </div>
    </div>
    </Link>
  );
}

export default ProductItem;
