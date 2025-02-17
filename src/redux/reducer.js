const initialState = {
    isLoggedIn: false,
    user: null,
    loginTime: null,
role: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_STATUS':
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                loginTime: action.payload.loginTime,
role: action.payload.role,
            };
        default:
            return state;
    }
};

export default authReducer;
