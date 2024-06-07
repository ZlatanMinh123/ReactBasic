import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    };

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
       console.log('>>> check data input: ', this.state);
    }

    render() {
        // console.log('>> check props: ', this.props)
        let {name, age, address, arrJobs} = this.props
        return (
            <>
                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    }
}
// Sd export để dùng file này bên trong file App.js
export default ChildComponent;
