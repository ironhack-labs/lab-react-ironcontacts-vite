import "./App.css";
import ContactsList from "./contacts.json";

const contacts = ContactsList.slice(0,5);

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
      <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won an Oscar</th>
      <th>Won an Emmy</th>
    </tr>
  </thead>
  <tbody>
    { contacts.map(celeb => {
        return (
          <tr>
            <td>
              <img style={{width:"50px"}} src={celeb.pictureUrl} alt={celeb.name}></img>
            </td>
            <td>
              { celeb.name }
            </td>
            <td>
              { celeb.popularity }
            </td> 
            <td>
              { celeb.wonOscar ? <i>🏆</i> : null }
            </td> 
            <td>
            { celeb.wonEmmy ? <i>🌟</i> : null }
              
            </td> 
          </tr>
          )
      })}
    </tbody>
      </table>
    </div>
  );
}

export default App;
