import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
    render() {
        console.log("check props: ", this.props);
        return <div>This is Home Page!</div>;
    }
}

export default Color(Home);
    