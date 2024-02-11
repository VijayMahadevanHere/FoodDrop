import React from "react";

class Profile extends React.Component {

    constructor(props){
      console.log('child-constructor');
        super(props)
        this.state={
            userInfo:{
              name:'dummy name',
            location:'dummy location'
            }
        }
    }

    async componentDidMount(){
     this.timer = setInterval(() =>{
        console.log('Namaste React OP');
      },1000)
     
      console.log('child-componentdidmount');
    }
    componentDidUpdate(){
      console.log('componentdidupdate');
    }
    componentWillUnmount(){
    clearInterval(this.timer)
    }
  render() {
    const{userInfo}=this.state
    console.log('child-render');
    
    return (
      <div>
       
      </div>
    );
  }
}

export default Profile;
