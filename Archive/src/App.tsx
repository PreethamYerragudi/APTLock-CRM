import { useState } from 'react';
import './assets/css/App.css';
import Dashboard from './assets/pages/Dashboard';
import Contacts from './assets/pages/Contacts';
import logo from './assets/images/defaultUser.png';
import Pipeline from './assets/pages/Pipeline';



function App() {
  const [activePage, setActivePage] = useState('dashboard');
  
  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <Dashboard></Dashboard>
        );
      case 'pipeline':
        return (
          <Pipeline></Pipeline>
        );
      case 'contacts':
        return (
          <Contacts></Contacts>
        );
      case 'listings':
        return <div>Listings Content</div>;
      case 'activities':
        return <div>Activities Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <ul>
            <li className={activePage === 'dashboard' ? 'active' : ''}>
              <a href="#dashboard" onClick={() => setActivePage('dashboard')}>Dashboard</a>
            </li>
            <li className={activePage === 'pipeline' ? 'active' : ''}>
              <a href="#pipeline" onClick={() => setActivePage('pipeline')}>Pipeline</a>
            </li>
            <li className={activePage === 'contacts' ? 'active' : ''}>
              <a href="#contacts" onClick={() => setActivePage('contacts')}>Contacts</a>
            </li>
            <li className={activePage === 'listings' ? 'active' : ''}>
              <a href="#listings" onClick={() => setActivePage('listings')}>Listings</a>
            </li>
            <li className={activePage === 'activities' ? 'active' : ''}>
              <a href="#activities" onClick={() => setActivePage('activities')}>Activities</a>
            </li>
            <li className={activePage === 'settings' ? 'active' : ''}>
              <a href="#settings" onClick={() => setActivePage('settings')}>Settings</a>
            </li>
          </ul>
        </div>
        <div className="user-info">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Username</span>
        </div>
      </header>
      <div className='search'>
        <input type="text" placeholder="Search.."></input>
        <main className="App-content">
        {renderContent()}
      </main>
      </div>

    </div>
  );
}

export default App;
