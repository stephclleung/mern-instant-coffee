import axios from "axios";


export const addGoogleUser = (info) => ({
    type: 'NEW_USER',
    info
})

export const removeGoogleUser = () => ({
    type: 'REMOVE_USER',
})

export const loginGoogleUser = (info) => {
    console.log("Am logins", info);
    return (dispatch) => {
        axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${info.token}`)
            .then((res) => {
                console.log("Success ", res);
                dispatch(addGoogleUser(info))
            })
            .catch((err) => {
                console.log("Error! ", err);
            })
    }
}