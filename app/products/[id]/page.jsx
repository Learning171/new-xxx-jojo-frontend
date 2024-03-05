"use client"
import Breadcrumb from '@/app/_components/Breadcrumb';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ProductName from '../_components/ProductName';
import ProductInfo from '../_components/ProducttInfo';
import ProductList from '@/app/_components/ProductList';
import { usePathname } from 'next/navigation';

function ProductDetail({params}) {

    //Use to get Url Path
    const path=usePathname();

    const [productDetail, setProductDetail] = useState();
    const [productList, setProductList]=useState([]);
    
    useEffect(()=>{
        console.log("Product Path", params?.id)
        getProductById_();
    },[])

    const getProductById_=()=>{
        GlobalApi.getProductById(params?.id).then(resp=>{
            console.log(resp.data)
            setProductDetail(resp.data);
            getProductListByCategory();
        })
    }

    const getProductListByCategory=()=>{
        GlobalApi.getProductByCategory(productDetail?.category).then(resp=>{
            console.log(resp.data)
            setProductList(resp.data)
        })
    }
  return (
    <div className='p-5 py-12 px-10 md:px28'>
        <Breadcrumb path={path}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-10'>
            <ProductName product={productDetail}/>
            <ProductInfo product={productDetail}/>
        </div>
        {productList&& <div className='mt-20'>
        <h2 className='font-medium text-[20px] mb-4'>Similar Products</h2>
        <ProductList productList={productList} />
        </div>}
    </div>
  )
}

export default ProductDetail
