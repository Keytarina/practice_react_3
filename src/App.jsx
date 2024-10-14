import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import "./App.css";

function App() {
	const [filter, setFilter] = useState("");
	const [contacts, setContacts] = useState(() => {
		// Зчитуємо значення за ключем
		const savedContacts = window.localStorage.getItem("contacts");
		// Якщо там щось є, повертаємо це значення як початкове значення стану
		if (savedContacts !== null) {
			return JSON.parse(savedContacts);
		}
		// У протилежному випадку повертаємо яке-небудь значення за замовчуванням
		return [];
	});

	useEffect(() => {
		window.localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

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

	const formSubmitHandle = (data) => {
		if (contacts.some((contact) => contact.name === data.name)) {
			alert(`${data.name} is already in contacts.`);
			return;
		}
		setContacts((prevContacts) => [...prevContacts, { id: nanoid(), ...data }]);
	};

	return (
		<div>
			<h1 className="title">Phonebook</h1>
			<ContactForm onSubmit={formSubmitHandle} />
			<SearchBox filter={filter} handleChangeFilter={handleChangeFilter} />
			<ContactList
				filteredContacts={handleFilteredContacts()}
				handleDeleteContact={handleDeleteContact}
			/>
		</div>
	);
}

export default App;
