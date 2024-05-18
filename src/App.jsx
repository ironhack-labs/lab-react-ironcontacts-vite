
import contactsArray from "./contacts.json"
import {useState} from 'react'


function App() {

  const initialContacts = contactsArray.slice(0, 5);
  const remainingContacts = contactsArray.slice(5);
  const [contacts, setContacts] = useState(initialContacts);
  
  const addRandomContact = () => {
    const remainingContacts = contactsArray.filter(
      contact => !contacts.includes(contact)
    );
    
   const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    const copyArray = [randomContact, ...contacts]
    setContacts(copyArray);
    //filter

  };

  const sortByName = () => {
    const sortContactsByName = [...contacts]
    sortContactsByName.sort((a,b)=> a.name.localeCompare(b.name));
    setContacts(sortContactsByName);
  
  };

  const sortByPopularity = () => {
    const sortContactsByPopularity = [...contacts]
    sortContactsByPopularity.sort((a,b)=> b.popularity - a.popularity);
    setContacts(sortContactsByPopularity);

   
  };

  const deleteContact = (contactId) => {
    const deletedContact = contacts.filter(contact => contactId !== contact.id)

    setContacts(deletedContact);
    
  };


 //const [contacts, setContacts] = useState(contactsArray.slice(0,5))

 
 //const [remainingContacts, setRemainingContacts]
//random entre 0 e o lenght do array
//tem que atualizar os contatos que sobraram (5)
 //const addContact = () => {
  //tudo dentro desta funçao
  //sets
  //const deleteMovie = movieId => {
        //mostra todos os movies diferentes do movieId que eu clico
        //const filteredMovies = movies.filter(movie => movieId !== movie._id); (fazer igual ao movie)
  
 //}
 //copyofContacts

 //nao fazer so o push, fazer copy para n modificar o array
 //


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map(contact => (

              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} width= "100px"/></td>
                <td>
                  {contact.name} 
                </td>
                <td>
                  {contact.popularity}  
                </td>
                <td>{contact.wonOscar ? <span role="img" aria-label="trophy">🏆</span> : null}</td>
              <td>{contact.wonEmmy ? <span role="img" aria-label="star">🌟</span> : null}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              
              
              </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
