import React, {Component} from 'react';
import {List, Image} from 'semantic-ui-react';
//https:/randomuser.me/api/portraits/women/42.jpg

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                {/* {console.log("props:"+JSON.stringify(this.props.attendee.photoURL))} */}
                <Image as = "a" size = 'mini' circular src = {this.props.attendee.photoURL}/>
            </List.Item>
        );
    }
}

export default EventListAttendee;