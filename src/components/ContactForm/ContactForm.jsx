import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
	name: "",
	number: "",
};

const ContactSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	number: Yup.string()
		.min(3, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
});

export default function ContactForm({ onSubmit }) {
	const nameFieldId = useId();
	const phoneFieldId = useId();

	const handleSubmit = (values, actions) => {
		onSubmit(values);
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={ContactSchema}
		>
			<Form className={css.form}>
				<label htmlFor={nameFieldId}>Name</label>
				<Field className={css.field} type="text" name="name" id={nameFieldId} />
				<ErrorMessage className={css.error} name="name" component="span" />

				<label htmlFor={phoneFieldId}>Number</label>
				<Field
					className={css.field}
					type="tel"
					name="number"
					id={phoneFieldId}
				/>
				<ErrorMessage className={css.error} name="number" component="span" />

				<button className={css.btn} type="submit">
					Add contact
				</button>
			</Form>
		</Formik>
	);
}
