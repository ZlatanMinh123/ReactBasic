import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "abcJob1", title: "Developers", salary: "500 $" },
            { id: "abcJob2", title: "Testers", salary: "400 $" },
            { id: "abcJob3", title: "Project managers", salary: "1000 $" },
        ],
    };

    

    render() {
        return (
            <>
                <AddComponent />
                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        );
    }
}
// Sd export để dùng file này bên trong file App.js
export default MyComponent;
