import React from 'react'

import ProfileFunctionalComponent from './Profile'
import Profile from './ProfileClass'
import UserContext from '../utils/userContext'

class Aboutus extends React.Component{
  constructor(props){
    super(props)
    
  }
  
  render(){

    return (
      <div className='h-screen '>
        <h1> This is Profile Page..</h1>
        <ProfileFunctionalComponent/>
      
      </div>
    )
  }

}




export default Aboutus
