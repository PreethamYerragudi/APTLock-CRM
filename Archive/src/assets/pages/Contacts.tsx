import '/Users/preethamyerragudi/AptLock/src/assets/css/Contacts.css';
import { useState } from 'react';


function Contacts(){
    const contactsData = [
        { name: 'John Doe', mobile: '123-456-7890', email: 'johndoe@example.com', via: 'Email', property: 'Property A', interaction: '2024-07-05', owner: 'Jane Smith', created: '2024-07-01' },
        { name: 'Jane Smith', mobile: '234-567-8901', email: 'janesmith@example.com', via: 'Phone', property: 'Property B', interaction: '2024-07-04', owner: 'John Doe', created: '2024-06-28' },
        { name: 'Emily Johnson', mobile: '345-678-9012', email: 'emilyj@example.com', via: 'In-Person', property: 'Property C', interaction: '2024-07-03', owner: 'Jane Smith', created: '2024-06-25' },
        { name: 'Michael Brown', mobile: '456-789-0123', email: 'michaelb@example.com', via: 'Email', property: 'Property D', interaction: '2024-07-02', owner: 'Emily Johnson', created: '2024-06-29' },
        { name: 'Laura Wilson', mobile: '567-890-1234', email: 'lauraw@example.com', via: 'Phone', property: 'Property E', interaction: '2024-07-01', owner: 'Michael Brown', created: '2024-06-27' },
        { name: 'David Smith', mobile: '678-901-2345', email: 'davids@example.com', via: 'In-Person', property: 'Property F', interaction: '2024-06-30', owner: 'Laura Wilson', created: '2024-06-26' },
        { name: 'Susan Clark', mobile: '789-012-3456', email: 'susanclark@example.com', via: 'Email', property: 'Property G', interaction: '2024-06-29', owner: 'David Smith', created: '2024-06-24' },
      ];
    
      const [contacts, setContacts] = useState(contactsData);
      const [sortAsc, setSortAsc] = useState(true);
      const [currentPage, setCurrentPage] = useState(1);
      const [fade, setFade] = useState(false);
      const itemsPerPage = 5;
    
      const sortContacts = () => {
        const sortedContacts = [...contacts].sort((a, b) => {
          const dateA = new Date(a.created).getTime();
          const dateB = new Date(b.created).getTime();
          if (sortAsc) {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        });
        setContacts(sortedContacts);
        setSortAsc(!sortAsc);
      };
    
      const createNewContact = () => {
        console.log('Create New Contact clicked');
        // Add logic to open a form or modal to create a new contact
      };
    
      const totalPages = Math.ceil(contacts.length / itemsPerPage);
      const displayedContacts = contacts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
      const handleNextPage = () => {
        if (currentPage < totalPages) {
          setFade(true);
          setTimeout(() => {
            setCurrentPage(currentPage + 1);
            setFade(false);
          }, 300);
        }
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setFade(true);
          setTimeout(() => {
            setCurrentPage(currentPage - 1);
            setFade(false);
          }, 300);
        }
      };
    
      return (
        <div className="contacts">
          <div className="contacts-header">
            <h1>Contacts</h1>
            <div className="contacts-actions">
              <button onClick={sortContacts}>Sort by Created Time</button>
              <button onClick={createNewContact}>Create New Contact</button>
            </div>
          </div>
          <table className={`fade-transition ${fade ? 'fade-out' : 'fade-in'}`}>
            <thead>
              <tr>
                <th>Contact Name</th>
                <th>Mobile & Email</th>
                <th>Contact Via</th>
                <th>Property Interested In</th>
                <th>Last Interaction</th>
                <th>Acc. Owner / Created By</th>
              </tr>
            </thead>
            <tbody>
              {displayedContacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.mobile}<br/>{contact.email}</td>
                  <td>{contact.via}</td>
                  <td>{contact.property}</td>
                  <td>{contact.interaction}</td>
                  <td>{contact.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      );

}

export default Contacts;