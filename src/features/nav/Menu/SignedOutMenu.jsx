import React from 'react';
import {Menu, Button} from 'semantic-ui-react';

const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position = "right">
            <Button onClick = {signIn} positive inverted content = "Login"/>
            <Button negative inverted content = "SignUp" style = {{marginLeft : '0.5px'}}/>
        </Menu.Item>
        );
}

export default SignedOutMenu;