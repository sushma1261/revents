import React, { Component } from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';
class NavBar extends Component {
    render() {
        return (
            <Menu style = {{background : "#F47D8F" , height : "80px"}}>
                <Container>
                    <Menu.Item header>
                        img
                    </Menu.Item>
                    <Menu.Item name = "Events"/>
                    <Menu.Item>
                        <Button floated = "right" positive inverted content = "Create Event" />
                     </Menu.Item>
                    <Menu.Item position = "right">
                        <Button positive inverted content = "Login"/>
                        <Button negative inverted content = "SignUp" style = {{marginLeft : '0.5px'}}/>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default NavBar;