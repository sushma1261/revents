import React, { Component } from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';
import {Link, NavLink} from 'react-router-dom';
import SignedOutMenu from '../Menu/SignedOutMenu';
import SignedInMenu from '../Menu/SignedInMenu';
class NavBar extends Component {
    state = {authenticated : false};
    handleSignIn = () => {
        this.setState({authenticated : true});
    }
    handleSignOut = () => {
        this.setState({authenticated : false});
        this.props.history.push('/')
    }
    render() {
        const {authenticated} = this.state;
        return (
            <Menu style = {{background : "#F47D8F" , height : "80px"}}>
                <Container>
                    <Menu.Item as = {Link} to = '/' header>
                        Revents
                    </Menu.Item>
                    <Menu.Item as = {NavLink} to = '/events' name = "Events"/>
                    <Menu.Item as = {NavLink} to = '/people' name = "People"/>
                    <Menu.Item>
                        <Button as = {Link} to = '/createEvent' floated = "right" positive inverted content = "Create Event" />
                     </Menu.Item>
                     {authenticated ? <SignedInMenu signOut = {this.handleSignOut} /> : <SignedOutMenu signIn = {this.handleSignIn} />}
                </Container>
            </Menu>
        );
    }
}

export default NavBar;