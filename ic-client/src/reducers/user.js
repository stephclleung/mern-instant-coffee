

const defaultUserState = { userName: "", email: "", token: "" }
const userReducer = (state = defaultUserState, action) => {
    if (action.type === 'NEW_USER') {
        return {
            userName: action.objInfo.profileObj.givenName,
            email: action.objInfo.profileObj.email,
            token: action.objInfo.tokenId
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