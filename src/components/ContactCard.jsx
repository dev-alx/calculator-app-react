import React, { Component } from 'react';

class ContactCard extends Component {
    
    render() { 
        return (  
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.Contact.Name}</h5>
                    
                    <div>                        
                        <br/>
                        <span className="font-weight-bold">Name: </span>                        
                        {this.props.Contact.Name}
                        <br/>
                        <span className="font-weight-bold">Phone Number: </span>                        
                        {this.props.Contact.PhoneNumber}
                        <br/>
                        <span className="font-weight-bold">Email: </span>                        
                        {this.props.Contact.Email}
                        <br/>
                        <span className="font-weight-bold">Address: </span>
                        {this.props.Contact.Neighborhood}                        
                    </div>
                    <a href="#" className="card-link">Edit</a> 
                    <a href="#" className="card-link">Details</a>
                </div>
            </div> 
        );
    }
}
 
export default ContactCard;