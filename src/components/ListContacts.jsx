import React, { Component } from 'react';
import ContactCard from './ContactCard'


class ListContacts extends Component {

    render() { 
        return ( 
            <React.Fragment>
            {this.props.contacts.map(contact => (
                <ContactCard key={contact.Id} Contact={contact} />
            ))}
            </React.Fragment>          
        );
    }
}
 
export default ListContacts;