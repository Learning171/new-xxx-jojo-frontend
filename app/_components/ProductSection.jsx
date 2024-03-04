"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

function ProductSection() {
  
  const [productList, serProductList] = useState([]);
  useEffect(()=>{
    getLatestProducts_();
  },[])

  const getLatestProducts_=()=>{
    GlobalApi.getLatestProduct().then(resp=>{
      console.log(resp.data);
      serProductList(resp.data);
    })
  }

  const filterProductList=(category)=>{
    const result=productList.filter(item=>
      item.category==category);
      return result;
  }

  return productList&&(
    <div className='px-10 md:px-20'>
      {/* Latest Products */}
      <h2 className='font-bold text-[20px] my-3'>Latest Products</h2>
      <ProductList productList={productList}/>

       {/*Staple Products  */}
      <h2 className='font-bold text-[20px] my-3'>Staples</h2>
      <ProductList productList={filterProductList('Staples')}/>

      {/*Packeged Food Products  */}
      <h2 className='font-bold text-[20px] my-3'>Packeged Food</h2>
      <ProductList productList={filterProductList('Packeged Food')}/>
      
      {/*Personal and Baby Care Products  */}
      <h2 className='font-bold text-[20px] my-3'>Personal and Baby Care</h2>
      <ProductList productList={filterProductList('Personal and Baby Care')}/>
    </div>
    
  )
}

export default ProductSection
