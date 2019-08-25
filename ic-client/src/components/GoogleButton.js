
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import React from 'react';

const GoogleButton = (props) => (
    <div>
        {console.log("Am butt", props)}
        {!!props.user.userName ? (
            <div>
                <p>Name: {props.user.userName}</p>
                <Logout onLogoutSuccess={props.onGoogleLogout} />
            </div>
        ) : (
                <Login onSuccess={props.onGoogleLogin} />
            )}
    </div>
);

const Login = (props) => (
    <div>
        {console.log("Am log in , ", props)}
        <GoogleLogin
            className="002"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onRequest={loading}
            onSuccess={props.onSuccess}
            onFailure={tempFunction}
            cookiePolicy={'single_host_origin'}
        />
    </div>
)

const Logout = (props) => (
    <div>
        {console.log("Am log out, ", props)}
        {console.log("Am client ID", process.env.REACT_APP_GOOGLE_CLIENT_ID)}
        <GoogleLogout
            className="001"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onRequest={loading}
            onLogoutSuccess={props.onLogoutSuccess}
            onLogoutFailure={tempFunction}
        >
        </GoogleLogout>
    </div>
)

const tempFunction = (data) => {
    console.log("Temp function fired", data);
}

const loading = () => {
    console.log('loading') // eslint-disable-line
}
export default GoogleButton;