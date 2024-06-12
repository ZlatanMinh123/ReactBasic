import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    };

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };



    handleSubmit = (event) => {
        event.preventDefault();
        // Nếu this.state.title là 1 giá trị falsy (vd 1 chuỗi rỗng - do ta k nhập)
        // Khi đó vì có dấu ! đằng trước nên nó thành truthy => đoạn code bên dưới chạy
        if (!this.state.title || !this.state.salary) {
            alert("Missing required parameters");
            return;
        }
        console.log(">>> check data input: ", this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        });
    };
    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label>
                <br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="name">Salary:</label>
                <br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br></br>
                <input
                    type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        );
    }
}

export default AddComponent;
