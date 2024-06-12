import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "1", title: "Developers", salary: "500" },
            { id: "2", title: "Testers", salary: "400" },
            { id: "3", title: "Project managers", salary: "1000" },
        ],
    };

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
        console.log("check job from parent: ", job);
    };

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        });
    };

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        );
    }
}
// Sd export để dùng file này bên trong file App.js
export default MyComponent;
