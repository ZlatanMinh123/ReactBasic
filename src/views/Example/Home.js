import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {
    handleDeleteUser = (user) => {
        console.log("check user delete:", user);
        this.props.deleteUserRedux(user);
    };
    handleCreateUser = () => {
        this.props.addUserRedux();
    };
    render() {
        console.log("check props: ", this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>This is Home Page!</div>
                <div>
                    {listUsers &&
                        listUsers.length &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={index.id}>
                                    {index + 1} - {item.name}{" "}
                                    <span
                                        onClick={() =>
                                            this.handleDeleteUser(item)
                                        }
                                    >
                                        {" "}
                                        X{" "}
                                    </span>
                                </div>
                            );
                        })}
                    <button onClick={() => this.handleCreateUser()}>
                        Add New
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) =>
            dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUserRedux: () => dispatch({ type: "CREATE_USER" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
