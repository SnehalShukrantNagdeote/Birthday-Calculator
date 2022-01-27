import logo from './logo.svg';
import './App.css';
// import database from './Fire.js';
import React from 'react';
import "./Login.css"

class InputField extends React.Component {
  constructor(props){
    super(props);
    
    this.updateParentState = this.updateParentState.bind(this);
  }
 
  updateParentState(e){
   console.log("inside child's method to update parent state")
  //  console.log()
    this.props.updateState(this.props.inputPlaceholder, e.target.value);
  }
  render(){
    return(
      <>
      <input 
      type = {this.props.inputType}
      placeholder = {this.props.inputPlaceholder}
      onChange = {this.updateParentState}
      className='inputfield'
      />
      
      </>
    )
  }
}
// {e=>this.props.updateState(this.props.inputPlaceholder, e.target.value)}
export default InputField;