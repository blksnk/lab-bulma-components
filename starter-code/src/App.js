import React, {Component} from 'react';

import Navbar from './Navbar.js';
import FormField from './FormField.js'

class App extends Component {
	render() {
		return (
			<main>
				<Navbar/>
				<FormField/>
			</main>
		)
	}
}

export default App;