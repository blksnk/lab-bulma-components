import React, {Component} from 'react';

function createForm (name, type, placeholder) {
	return (
	<div className="field">
		<label className="label">{name}
			<div className="control">
				<input className="input is-medium" type={type} placeholder={placeholder}/>
			</div>
		</label>
	</div>
	)
}


class FormField extends Component {
	render() {
		return (
			<div className="columns">
				<div className="column is-one-fifth">
					{createForm("Name", "text", "e.g Alex Smith")}
					{createForm("Email", "email", "e.g. alexsmith@gmail.com")}
				</div>
			</div>
		)
	}
}



export default FormField;