import axios from "axios";


export const addGoogleUser = (info) => ({
    type: 'NEW_USER',
    info
})

export const removeGoogleUser = (info) => ({
    type: 'REMOVE_USER',
    info
})

export const loginGoogleUser = (info) => {
    return (dispatch) => {
        axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${info.tokenId}`)
            .then((res) => {
                console.log("Success ", res);
                dispatch(addGoogleUser(res))
            })
            .catch((err) => {
                console.log("Error! ", err);
            })
    }
}