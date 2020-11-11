import React, { Component } from 'react';

class ContactCard extends Component {
    
    render() { 
        return (  
            
            <div className="card mb-3">
                <div className="card-header">{this.props.Contact.Name}</div>
                <div className="card-body">
                    <div>  
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
                        <p/>                        
                    </div>
                    <a className="btn btn-primary mr-3" href="#">Edit</a>    
                    <a className="btn btn-success" href="#">Details</a> 
                </div>
            </div>           
        );  
    }
}
 
export default ContactCard;