

const defaultUserState = { userName: "", email: "", token: "" }
const userReducer = (state = defaultUserState, action) => {
    if (action.type === 'NEW_USER') {
        console.log("Am action", action);
        return {
            userName: action.info.userName,
            email: action.info.email,
            token: action.info.token
            //  userName: action.objInfo.profileObj.givenName,
            // email: action.objInfo.profileObj.email,
            // token: action.objInfo.tokenId
        }
    } else if (action.type === 'REMOVE_USER') {
        return {
            userName: "",
            email: "",
            token: ""
        }
    }
    return state;
}

export default userReducer;