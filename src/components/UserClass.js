import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:{
          name:"Dummy",
          location:"Default"
        }
    }
  }
    async componentDidMount(){
      const data = await fetch("https://api.github.com/users/singhprakhar32")
      const jsonData = await data.json();
      this.setState({userInfo:jsonData})
    }
    componentDidUpdate(){
      console.log("Updated componentmount  call ")
    }
    componentWillUnmount(){
      console.log("Unmounting component")
    }

    render(){
      const {name, location,avatar_url} = this.state.userInfo
      return (
            <>
              <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name:{name}</h2>
                <h3>Contact Us:9630341173</h3>
                <h4>email:singhprakhar32@gmail.com</h4>
                <h4>location:{this.props.location}</h4>
              </div>
            </>  
        );
    }
}
export default UserClass