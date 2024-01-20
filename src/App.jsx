import contacts from "./contacts.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="contacts">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emy</th>
        </tr>
        <tr>
          <img src={contacts[0].pictureUrl} className="ProfilePic"/>
          <td>{contacts[0].name}</td>
          <td>{contacts[0].popularity}</td>
          <td>{contacts[0].wonOscar ? '🏆' : ''}</td>
          <td>{contacts[0].wonEmmy ? '🌟' : ''}</td>
        </tr>
        <tr>
        <img src={contacts[1].pictureUrl} className="ProfilePic"/>
          <td>{contacts[1].name}</td>
          <td>{contacts[1].popularity}</td>
          <td>{contacts[1].wonOscar ? '🏆' : ''}</td>
          <td>{contacts[1].wonEmmy ? '🌟' : ''}</td>
        </tr>
        <tr>
        <img src={contacts[2].pictureUrl} className="ProfilePic"/>
          <td>{contacts[2].name}</td>
          <td>{contacts[2].popularity}</td>
          <td>{contacts[2].wonOscar ? '🏆' : ''}</td>
          <td>{contacts[2].wonEmmy ? '🌟' : ''}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
