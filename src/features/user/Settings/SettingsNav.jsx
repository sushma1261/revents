import React from 'react';
import {Grid, Menu, Header} from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';
// import {createStore} from 'redux';
const SettingsNav = () => {
    return (
        <Grid.Column width = {4}>
            <Menu vertical>
                <Header icon = "user" attached inverted color = "grey" content = "Profile" />
                <Redirect exact from = '/settings'  to = '/settings/basics'/>
                <Menu.Item as={NavLink} to = '/settings/basics'>Basics</Menu.Item>
                <Menu.Item as={NavLink} to = '/settings/about'>About Me</Menu.Item>
                <Menu.Item as={NavLink} to = '/settings/photos'>My Photos</Menu.Item>
            </Menu>
            <Grid.Row />
            <Menu vertical>
                <Header icon = "settings" attached inverted color = "grey" content = "Account"/>
                <Menu.Item as={NavLink} to = '/settings/account '>My Account</Menu.Item>
            </Menu>
        </Grid.Column>
    );
}

export default SettingsNav;