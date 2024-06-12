import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    };

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        });
    };

    handleOnclickDelete = (job) => {
        console.log("handleOnclickDelete: ", job);
        this.props.deleteJob(job);
    };
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === false ? "showjobs: false" : "showjobs: true";
        console.log(check);
        return (
            <>
                {/* Điều kiện là đúng thì đoạn code sau dấu ? đc thực hiện
                Sai thì đoạn code sau dấu : đc thực hiện
             */}
                {showJobs === false ? (
                    // Khi bấm vào nút Show thì biến showJobs sẽ thành true
                    <div>
                        <button
                            className="btn-show"
                            onClick={() => this.handleShowHide()}
                        >
                            Show
                        </button>
                    </div>
                ) : (
                    // Biến showJobs = true nên đoạn code bên dưới sẽ thực hiện,
                    // job-list sẽ được render ra.
                    <>
                        <div className="job-lists">
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}$ <></>
                                        <span
                                            onClick={() =>
                                                this.handleOnclickDelete(item)
                                            }
                                        >
                                            x
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            {/* Bấm vào nút Hide lần nữa biến showJobs sẽ chuyển lại
                                thành false
                             */}
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

// Sd export để dùng file này bên trong file App.js
export default ChildComponent;
