import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
	const handleSubmit = (evt) => {
		console.log(evt.target);
		evt.preventDefault();
		onAdd({
			id: nanoid(),
			name: evt.target.name.value,
			number: evt.target.number.value,
		});
		evt.target.reset();
	};

	return (
		<form>
			<input type="text" name="name" />
			<input type="number" name="number" />
			<button type="submit">Add contact</button>
		</form>
	);
}
