import logo from './logo.svg';
import './App.css';
import Layout from './common/Layout';
import store from './store';
import {connect} from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import {StackModal} from './common/Modal';
import PartialViewRoute from './route/partialViewRoute';
import { bindActionCreators } from '@reduxjs/toolkit';
import { popModalFromStack, pushModalToStack } from './actions/commonActions';
import { Button } from 'antd';
function App(props) {
  const {modalStack} = props;
  console.log(props ,"whaswadgh")
  return (
    <div className="App">
      <BrowserRouter>
      <StackModal modalStack={modalStack} {...props}/>
      <Layout>
        <PartialViewRoute {...props}/>
        {/* Main Component */}
        <Button onClick={() => props.pushModalToStack({ title: "Test Modal", content: "Modal Content" })}>
            Add Modal
          </Button>
      </Layout>
      </BrowserRouter>

    
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state ,"modal Reducer")
  return({
    common: state.common,
    modalStack: state.stackModal.modalStack
  })
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  
  pushModalToStack,
  popModalFromStack
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);
