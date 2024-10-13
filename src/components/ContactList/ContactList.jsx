import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ filtredContacts, handleDeleteContact }) {
	return (
		<ul className={css.contact_list}>
			{filtredContacts.map((contact) => {
				return (
					<Contact
						key={contact.id}
						id={contact.id}
						name={contact.name}
						number={contact.number}
						handleDeleteContact={handleDeleteContact}
					/>
				);
			})}
		</ul>
	);
}
