

import React from 'react';
import {render} from 'react-dom';
import Calculator from './Calculator.jsx'


require('../stylesheets/layout.sass')

class App extends React.Component {
	render() {
		return (
			<Calculator />
		);
	}
}

render(<App/>, document.getElementById('app'));