import React, { Component } from 'react';   
import ListContacts from './ListContacts'

class ManagementContact extends Component {
    state = {  
        contacts : [
            { Id: 1, Name:'Adrián Droide', PhoneNumber: '989756736', Neighborhood: 'El Recreo Norte', Email:'correo@dominio.com' },
            { Id: 2, Name:'Al K. Huete', PhoneNumber: '8965426736', Neighborhood: 'Altagracia', Email:'correo@dominio.com'},
            { Id: 3, Name:'Ana Konda', PhoneNumber: '56789263', Neighborhood: 'Zumen', Email:'correo@dominio.com'},
            { Id: 4, Name:'Ana Tomía', PhoneNumber: '62839865', Neighborhood: 'Las Palmas', Email:'correo@dominio.com'},
        ]
    }
    render() { 
        return ( 
            <React.Fragment>
                <nav class="navbar navbar-light bg-light">
                    <span class="navbar-brand mb-0 h1">User Contacts</span>
                </nav>
                <div className="container">
                    <h1>List of Contacts</h1>                 
                    <ListContacts contacts={this.state.contacts} />               
                </div>  
            </React.Fragment>
                       
         );
    }
}
 
export default ManagementContact;