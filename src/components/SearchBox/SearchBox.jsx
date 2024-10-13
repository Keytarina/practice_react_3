import css from "./SearchBox.module.css";

export default function SearchBox({ filter, handleChangeFilter }) {
	return (
		<div>
			<label htmlFor="filter">Find contacts by name</label>
			<input
				type="text"
				name="filter"
				id="filter"
				onChange={handleChangeFilter}
			/>
		</div>
	);
}
