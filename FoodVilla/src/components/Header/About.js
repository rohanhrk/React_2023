import { Component } from "react";
import ProfileClass from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the namaste react live course
        </p>
        {/* <ProfileClass name = "first child"/>
        <ProfileClass name = "second child"/> */}
        <ProfileFunctionalComponent />
      </div>
    )
  }
}

export default About;

/*
* ================ Output
* ##### https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

* < MOUNTING LIFE CYCLE >
*
* >>>> RENDER PHASE 
* parent constructor 
* parent render
*     constructor first child
*     rendder first child
*     constructor second child
*     render second child
*
*      >>>> COMMIT PHASE
*     component did mount first child
*     component did mount Second child
* parent component did mount
*
* < UPDATE LIFE CYCLE>
* 
* >>>> RENDER PFHASE
*     render first child
*     render second child

* >> COMMIT PHASE
*     component did update first child
*     component did update second child
*
* < UNMOUNT LIFE CYCLE>
*
* >>>> COMMIT PHASE
*   this will called when we change the page first child
*   this will called when we change the page second child
*
*/ 
