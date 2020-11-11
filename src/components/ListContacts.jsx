import React, { Component } from 'react';
import ContactCard from './ContactCard'


class ListContacts extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="card-deck">
                        {this.props.contacts.map(contact => (
                            
                            <div className="col-sm-6">
                            <ContactCard key={contact.Id} Contact={contact} />
                            </div>                    
                        ))}
                    </div>
                </div>
            </React.Fragment>          
        );
    }
}
 
export default ListContacts;