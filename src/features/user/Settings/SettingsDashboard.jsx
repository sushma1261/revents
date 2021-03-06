import React from 'react';
import {Grid} from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import AccountPage from './AccountPage';
import PhotosPage from './PhotosPage';
const SettingsDashboard = () => {
    return (
        <div>
            {/* <h1>SettingsDashboard</h1> */}
            <Grid>
                <Grid.Column width = {12}>
                    <Switch>
                        <Route path = '/settings/basics' component = {BasicPage} />
                        <Route path = '/settings/about' component = {AboutPage} />
                        <Route path = '/settings/photos' component = {PhotosPage} />
                        <Route path = '/settings/account' component = {AccountPage} />
                    </Switch>
                </Grid.Column>
                <Grid.Column width = {4}>
                    <SettingsNav />
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default SettingsDashboard;