import React, { Component } from 'react';
import './App.css';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../features/nav/NavBar/NavBar';
import {Container} from 'semantic-ui-react';
import UserDetailedPage from '../../features/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailedPage/EventDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path = '/'  component={HomePage}/>
        </Switch>
        <Route path = "/(.+)" render = {() => (
          <div className = "App">
            <NavBar />
            <Container className = "main">
              {/* <EventDashboard /> */}
              <Switch>
                <Route path = '/events' component={EventDashboard}/>
                <Route path = '/event/:id' component={EventDetailedPage}/>
                <Route path = '/people' component={PeopleDashboard}/>
                <Route path = '/profile/:id' component={UserDetailedPage}/>
                <Route path = '/settings' component={SettingsDashboard}/>
                <Route path = '/createEvent' component={EventForm}/>
              </Switch>
            </Container>
      </div>
        )}/>
      </div>
      );
  }
}

export default App;
