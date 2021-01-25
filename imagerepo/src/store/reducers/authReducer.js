
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR': 
            return {
                ...state,
                authError: 'login failed'
            }; 

        case 'LOGIN_SUCCESS':
            console.log("login success")
            return {
                ...state,
                authError: null
            }
        
        case 'SIGNOUT_SUCCESS':
            console.log("sign out success")
            return state; 

        case 'SIGNUP_SUCCESS':
            console.log("signup successful")
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log("signup error")
            return {
                ...state,
                authError: action.err.message
            }

        default:
            break;
    }
    
    return state

}

export default authReducer