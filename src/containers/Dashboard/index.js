import React from 'react';
import { connect } from 'react-redux';
import { pushModalToStack ,popModalFromStack } from '../../actions/commonActions';
import { bindActionCreators } from '@reduxjs/toolkit';
import DashBoardComponent from '../../components/Dashboard';
import BreadCrumb from '../../common/Breadcrumb'

const Dashboard = (props) => {
  const { companyInfo } = props;
 
  return (
    <div>
      
      <DashBoardComponent {...props}/>
    </div>
  );
};

const mapStateToProps = (state) => {
 
  return {
    companyInfo: state.common.companyInfo,
  };
};

const mapDispatchToProps =(dispatch)=>{
  return bindActionCreators(
    {
       pushModalToStack,
       popModalFromStack
    },
    dispatch
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
