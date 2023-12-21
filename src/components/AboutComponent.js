import UserClass from "./UserClass.js";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){}
  render() {
    return (
      <>
        <h1>About</h1>
        <UserClass name={"Prakhar singh(Class)"} location = {"India"} />
      </>
    );
  }
}
export default About;
