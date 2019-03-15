import React, {Component} from 'react';
import EventListItem from './EventListItem';
class EventList extends Component {
    render() {
        const {events, onEventOpen} = this.props;
        //console.log(onEventEdit);
        return (
            <div>
                <h2>Event List</h2>
                {events.map ((event) => (
                    <EventListItem key = {event.id} event = {event} onEventOpen = {onEventOpen} />
                ))}
             </div>
        );
    }
}

export default EventList;