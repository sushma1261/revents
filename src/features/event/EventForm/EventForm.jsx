import React, {Component} from 'react';
import {Segment, Form, Button} from 'semantic-ui-react';
const emptyEvent = {
    title : '',
        date : '',
        city: '',
        venue : '',
        hostedBy : ''
}
class EventForm extends Component {
    
    state = {
        event: emptyEvent
    }

    componentDidMount() {
        if(this.props.selectedEvent !== null) {
            this.setState({
                event: this.props.selectedEvent
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log('Current: ', this.props.selectedEvent);
        // console.log('Next: ', nextProps.selectedEvent);
        if(nextProps.selectedEvent !== this.props.selectedEvent) {
            this.setState({
                event: nextProps.selectedEvent || emptyEvent
            })
        }
    }

    onFormSubmit = (evt) => {
        evt.preventDefault();
        //console.log(this.refs.title.value);
        console.log(this.state.event);
        this.props.createEvent(this.state.event); 
    } 
    onInputChange = (evt) => {
        const newEvent = this.state.event;
        newEvent[evt.target.name] = evt.target.value;
        this.setState({
            event : newEvent
        })
    }



    render() {
        const {event} = this.state; 
        const {handleCancel} = this.props;
        return (
            <Segment>
                <Form onSubmit = {this.onFormSubmit }>
                    <Form.Field>
                        <label>Event Title</label>
                        <input type = "text"
                        name = "title"
                        onChange = {this.onInputChange}
                        value = {event.title}
                        placeholder = "Event Title" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input type = "date"
                        name = "date"
                        onChange = {this.onInputChange}
                        value = {event.date}
                         placeholder = "date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input type = "text"
                        name = "city"
                        onChange = {this.onInputChange}
                        value = {event.city}
                        placeholder = "Event City" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input type = "text"
                        name = "venue"
                        onChange = {this.onInputChange}
                        value = {event.venue}
                         placeholder = "Event Venue" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input type = "text"
                        name = "hostedBy"
                        onChange = {this.onInputChange}
                        value = {event.hostedBy}
                        placeholder = "Hosted By" />
                    </Form.Field>
                    <Button positive type = "submit">
                        Submit
                    </Button>
                    
                    <Button onClick = {handleCancel} type = "button">Cancel</Button>
                </Form>
            </Segment>
            );
    }
}
export default EventForm;



