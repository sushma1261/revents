import React from 'react';
import {Dropdown, Menu, Image} from 'semantic-ui-react';
const SignedInMenu = ({signOut}) => {
    return (
        <Menu.Item position = "right">
            <Image avatar spaced = "right" />
            <Dropdown pointing = "top left" text = "username" >
                <Dropdown.Menu>
                    <Dropdown.Item text = "Create Event" icon = "plus" />
                    <Dropdown.Item text = "My Events" icon = "calendar" />
                    <Dropdown.Item text = "My Network" icon = "users" />
                    <Dropdown.Item text = "My Profile" icon = "user" />
                    <Dropdown.Item text = "Settings" icon = "settings" />
                    <Dropdown.Item text = "Sign Out" onClick = {signOut} icon = "power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
        );
}

export default SignedInMenu;