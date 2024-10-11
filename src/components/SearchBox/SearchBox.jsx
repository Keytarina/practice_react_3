import css from "./SearchBox.module.css";

export default function SearchBox({ filter }) {
	return (
		<div>
			<label htmlFor="filter">Find contacts by name</label>
			<input type="text" name="filter" id="filter" />
		</div>
	);
}
