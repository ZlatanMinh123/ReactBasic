const initState = {
    users: [
        { id: 1, name: "Tuấn Minh" },
        { id: 2, name: "Quỳnh Anh" },
    ],
    post: [],
};

// state này là trạng thái, là nơi lưu trữ data của REDUX
// actions này là actions truyền từ phía REACT
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            console.log("run into action delete user: ", action);
            let users = state.users;
            users = users.filter((user) => user.id !== action.payload.id);
            return {
                ...state,
                users,
            };
        case "CREATE_USER": // Tạo ngẫu nhiên 1 User
            let idUser = Math.floor(Math.random() * 101);
            let user = { id: idUser, name: `user - ${idUser}` };
            return {
                ...state,
                users: [...state.users, user],
            };
        default:
            return state;
    }
};

export default rootReducer;
