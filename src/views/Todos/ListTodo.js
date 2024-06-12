import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: "todo1", title: "Doing homework" },
            { id: "todo2", title: "Making videos" },
            { id: "todo3", title: "Fixing bugs" },
        ],
    };

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        });
        toast.success("Wow so easy!");
    };
    render() {
        let { listTodos } = this.state;
        // let listTodos = this.state.listTodosSSSS
        return (
            <div className="list-todo-container">
                {/* import file AddTodo */}
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos &&
                        listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>
                                        {" "}
                                        {index + 1} - {item.title}{" "}
                                    </span>
                                    <button className="edit"> Edit </button>
                                    <button className="delete"> delete </button>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default ListTodo;
