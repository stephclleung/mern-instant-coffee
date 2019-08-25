import React from 'react';

const User = (props) => (
    <div>
        <p>Hi, {props.profileObj.givenName} !</p>
    </div>
);

export default User;