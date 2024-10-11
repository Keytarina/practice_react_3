import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import ContactForm from "./components/ContactForm/ContactForm";

import initialState from "./initialState.json";

function App() {
	const [contacts, setContacts] = useState(initialState);
	const [filter, setFilter] = useState("helo");

	return (
		<div>
			<h1 className="title">Phonebook</h1>
			{/* <ContactForm /> */}
			<SearchBox filter={filter} />
			<ContactList contacts={contacts} />
		</div>
	);
}

export default App;
