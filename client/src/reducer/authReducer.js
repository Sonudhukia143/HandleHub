const initialState = {
    isLoggedIn: false,
    user: null, 
  };
  
const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isLoggedIn: true, user: action.payload };
      case 'SIGNUP':
        return { ...state, isLoggedIn: true, user: action.payload };
      case 'LOGOUT':
        return { ...state, isLoggedIn: false, user: null };
      default:
        return state;
    }
  };

  export default authReducer;