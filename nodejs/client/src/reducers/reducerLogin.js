



const initialState = {
    isLogin: false,
};

export const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("reducer ne");
            return {
                isLogin: true,
            };

        default:
            return {
                isLogin: state.isLogin,
            };
    }
};

export default reducerLogin;
