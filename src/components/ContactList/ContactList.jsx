import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
	return (
		<ul className={css.contact_list}>
			{contacts.map((contact) => {
				return (
					<Contact
						key={contact.id}
						name={contact.name}
						number={contact.number}
					/>
				);
			})}
		</ul>
	);
}
