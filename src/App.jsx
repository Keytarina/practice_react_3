import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import initialState from "./initialState.json";
import { object, string, number, InferType } from "yup";

function App() {
	const [values, setValues] = useState({
		id: "",
		name: "",
		number: "",
	});
	const [filter, setFilter] = useState("");
	const [contacts, setContacts] = useState(initialState);

	const handleChangeFilter = (evt) => {
		setFilter(evt.target.value);
	};

	const handleFilteredContacts = () => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	const handleDeleteContact = (id) => {
		setContacts(contacts.filter((contact) => contact.id !== id));
	};

	const addContact = () => {};

	return (
		<div>
			<h1 className="title">Phonebook</h1>
			<ContactForm onAdd={addContact} />
			<SearchBox filter={filter} handleChangeFilter={handleChangeFilter} />
			<ContactList
				filtredContacts={handleFilteredContacts()}
				handleDeleteContact={handleDeleteContact}
			/>
		</div>
	);
}

export default App;
