import React, { useEffect, useState } from 'react';
import Products from '../../../components/Product'
import { fetchAllProducts } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
const ProductContainer = (props) => {
  const columns=[{
    item:"SKU",
    check: true,
    isMandatory:true,
    key:1
  },
  {
    item:"Product",
    check: true,
    isMandatory:true,
    key:1
  },
  {
    item:"Variants",
    check: true,
    isMandatory:true,
    key:1
  },
  {
    item:"CategoryName",
    check: true,
    isMandatory:true,
    key:1
  },
  {
    item:"HSN",
    check: true,
    isMandatory:true,
    key:1
  },
  {
    item:"SKU",
    check: true,
    isMandatory:true,
    key:1
  },
  {
    item:"Warehouse",
    check: false,
    isMandatory:false,
    key:1
  },
  {
    item:"BrandName",
    check: false,
    isMandatory:false,
    key:1
  },
  {
    item:"UPC",
    check: false,
    isMandatory:false,
    key:1
  },
  {
    item:"ISBN",
    check: false,
    isMandatory:false,
    key:1
  },
]
  const values = {
    showColPop:false,
    txColumns: columns,
    pageNumber:1
  }
  console.log(props,"WANEDDD:::")
  const [state , updateState] = useState(values);
  useEffect(()=>{
   const payload={
    relationshipId: props.companyInfo?.defaultCompany?.relationshipId,
    pageNumber:1,
    pageSize:200,
   }
   props.fetchAllProducts(payload);
  },[])
  return (
   <Products {...props} {...state} updateState={(e)=>updateState(e)}/>
  )
}
const mapStateToProps = (state) => {
 
  return {
    companyInfo: state.common.companyInfo,
    allProduct: state.product?.allProducts
  };
};

const mapDispatchToProps =(dispatch)=>{
  return bindActionCreators(
    {
      
       fetchAllProducts,
    },
    dispatch
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
