import './App.css';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';


function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm  />

      <h2>Contacts</h2>
      <Filter  />
      <ContactList  />
    </div>
  );
}

export default App;
