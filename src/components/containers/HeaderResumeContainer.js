import React, {Component} from 'react';
import HeaderResume from '../presentational/HeaderResume/HeaderResume.js';

class HeaderResumeContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <HeaderResume/>
    );
  }
}

export default HeaderResumeContainer;