import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };

    console.log("constructor " + this.props.name);
  }

  componentDidMount() {
    // const data = await fetch("https://api.github.com/users/rohanhrk");
    // const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: {
        name: "rohan",
      },
    });

    console.log("component did mount " + this.props.name);
  }

  componentDidUpdate() {
    this.timer = setInterval(() => {
        console.log("React OP");
    }, 1000);
    console.log("component did update " + this.props.name);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("this will called when we change the page " + this.props.name);
  }

  render() {
    console.log("render " + this.props.name);
    return (
      <>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </>
    );
  }
}

export default Profile;
