import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import React from 'react';

const GoogleButton = (props) => (
    <div>
        {!!props.user.userName ? (
            <Logout />
        ) : (
                <Login />
            )}
    </div>
);

const Login = () => (
    <div>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={console.log("On success")}
            onFailure={console.log("On failure")}
            cookiePolicy={'single_host_origin'}
        />
    </div>
)

const Logout = () => (
    <div>
        <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={console.log("On logout success")}
            onLogoutFailure={console.log("On logout failure")}
        >
        </GoogleLogout>
    </div>
)
export default GoogleButton;