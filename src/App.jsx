import './App.css'
import contactsArray from './contacts.json'
import { useState } from 'react'

function App() {
	const [contacts, setContacts] = useState(contactsArray.slice(0, 5))

	const addRandomContact = () => {
		const min = 5
		const max = contactsArray.length - 1
		const newContact = contactsArray[Math.floor(Math.random() * (max - min) + min)]

		const contactsCopy = [...contacts]

		const contactsIds = contactsCopy.map(elm => elm.id)
		console.log(contactsIds.includes(newContact.id))

		if (!contactsIds.includes(newContact.id)) {
			contactsCopy.unshift(newContact)
		}

		setContacts(contactsCopy)
	}

	const sortByName = () => {
		const orderedContacts = contacts.toSorted((a, b) => {
			return a.name.localeCompare(b.name)
		})

		setContacts(orderedContacts)
	}

	const sortByPopularity = () => {
		const orderedContacts = contacts.toSorted((a, b) => {
			return a.popularity - b.popularity
		})
		setContacts(orderedContacts)
	}

	const deleteContact = id => {
		const newContactList = contacts.filter(eachContact => {
			return eachContact.id != id
		})
		setContacts(newContactList)
	}

	return (
		<div className='App'>
			<button className='normal-button' onClick={() => addRandomContact()}>
				Add Random Contact
			</button>
			<button className='normal-button' onClick={() => sortByName()}>
				Sort by name
			</button>
			<button className='normal-button' onClick={() => sortByPopularity()}>
				Sort by popularity
			</button>
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won Oscar</th>
						<th>Won Emmy</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map(eachContact => {
						return (
							<tr key={eachContact.id}>
								<td>
									<img src={eachContact.pictureUrl} alt='pic' />
								</td>
								<td>{eachContact.name}</td>
								<td>{eachContact.popularity.toFixed(2)}</td>
								{eachContact.wonOscar ? <td className='cup'>🏆</td> : <td></td>}
								{eachContact.wonEmmy ? <td className='cup'>🌟</td> : <td></td>}
								<td>
									<button
										className='delete-button'
										onClick={() => deleteContact(eachContact.id)}>
										Delete
									</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default App
