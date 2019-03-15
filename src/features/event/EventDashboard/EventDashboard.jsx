import React, {Component} from 'react';
import {Grid, Button} from 'semantic-ui-react';
import EventList  from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const events = [
        {
            id: 1,
            title: 'The amazing event',
            date: '2019-03-09',
            category: 'culture',
            city: 'Bhimavaram',
            hostedBy: 'Bob',
            venue: 'garden',
            hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
            description: 'A wonderful evening in the park',
            attendees: [
                {
                    id: 'a',
                    name: 'Bob',
                    photoURL: 'https://randomuser.me/api/portraits/women/20.jpg'
                },
                {
                    id: 'b',
                    name: 'Abcd',
                    photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
                }
            ]
        },
        {
            id: 2,
            title: 'The blockbuster event',
            date: '2019-03-09',
            category: 'culture',
            city: 'Bhimavaram',
            hostedBy: 'Tom',
            venue: 'Audi',
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/21.jpg',
            description: 'A wonderful evening in the Audi',
            attendees: [
                {
                    id: 'a',
                    name: 'Tom',
                    photoURL: 'https://randomuser.me/api/portraits/men/21.jpg'
                },
                {
                    id: 'b',
                    name: 'Abcd',
                    photoURL: 'https://randomuser.me/api/portraits/men/29.jpg'
                }
            ]
        },
        {
            id: 3,
            title: 'The fantastic event',
            date: '2019-03-09',
            category: 'culture',
            city: 'Bhimavaram',
            hostedBy: 'Jimmy',
            venue: 'Audi',
            hostPhotoURL: 'https://randomuser.me/api/portraits/women/26.jpg',
            description: 'A wonderful evening in the A Block',
            attendees: [
                {
                    id: 'a',
                    name: 'Tom',
                    photoURL: 'https://randomuser.me/api/portraits/women/26.jpg'
                },
                {
                    id: 'b',
                    name: 'Abcd',
                    photoURL: 'https://randomuser.me/api/portraits/men/26.jpg'
                }
            ]
        },
    ];

class EventDashboard extends Component {
    state = {
        events : events,
        isOpen : false,
        selectedEvent : null
    }

    handleFormOpen = () => {
        this.setState({
            selectedEvent: null,
            isOpen : true
        });
    };

    handleCancel = () => {
        this.setState({isOpen : false});
    };
    
    handleOpenEvent = (eventToOpen) => () => {
        this.setState({
            selectedEvent: eventToOpen,
            isOpen: true
        });
    };

    handleUpdateEvent = (updatedEvent) => {
        this.setState({
            events: this.state.events.map(event => {
                if(event.id === updatedEvent.id) {
                    return Object.assign({},updatedEvent);
                }
                else {
                    return event;
                }
            }),
           isOpen: false,
           selectedEvent: null  
        });
    }

    handleDeleteEvent = (eventId) => () => {
        const updatedEvents = this.state.events.filter(e => e.id !== eventId);
        this.setState({
            events: updatedEvents
        });
    }

    handleCreateEvent = (newEvent) => {
        newEvent.id = 123;
        newEvent.hostPhotoURL = '/assets/login.png';
        const updatedEvents = [...this.state.events, newEvent];//... for expanding states
         this.setState({
            events : updatedEvents,
            isOpen : false
         });
    };

    render() {
        const {selectedEvent} = this.state;
        return (
            <div>
                <h1>EventDashboard</h1>
                <Grid>
                    <Grid.Column width = {10}>
                        <EventList deleteEvent = {this.handleDeleteEvent} events = {this.state.events} onEventOpen = {this.handleOpenEvent}/> 
                    </Grid.Column>
                    <Grid.Column width = {6}>
                    <Button positive content = "Create Event" onClick = {this.handleFormOpen}/>
                    { this.state.isOpen &&
                        <EventForm updateEvent = {this.handleUpdateEvent} selectedEvent = {selectedEvent} handleCancel = {this.handleCancel} createEvent = {this.handleCreateEvent}/>}
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default EventDashboard;
