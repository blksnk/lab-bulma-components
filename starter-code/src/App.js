import React, {Component} from 'react';

class App extends Component {
	render() {
		return (
			<nav className="navbar is-transparent">
				<div className="navbar-brand">
				    <a className="navbar-item" href="#0">
						<img src="https://bulma.io/images/bulma-logo.png"/>
				    </a>
				</div>
				<div className="navbar-start">
		    		<a className="navbar-item" href="https://bulma.io/">Home</a>
		    	</div>
		    	<div className="navbar-end">
		    		<div className="navbar-item">
		    			<div className="buttons">
		    				<a className="button is-info" href="/login">Login</a>
		    				<a className="button is-primary" href="/signup">Signup</a>
		    			</div>
		    		</div>
		    	</div>
			</nav>
		)
	}
}

export default App;