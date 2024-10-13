import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, handleDeleteContact }) {
	return (
		<li className={css.contact_item}>
			<div className={css.contact_info}>
				<div className={css.contact_info_item}>
					<FaUser className={css.icon} />
					<p>{name}</p>
				</div>
				<div className={css.contact_info_item}>
					<FaPhone className={css.icon} />
					<p>{number}</p>
				</div>
			</div>

			<button
				className={css.delete_btn}
				onClick={() => handleDeleteContact(id)}
			>
				Delete
			</button>
		</li>
	);
}
