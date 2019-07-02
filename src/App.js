import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';

class App extends Component {
	render()
	{
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h4>Welcome to RJ's First React Project:</h4>
					<h1>A Ticking Clock</h1>
					<p className="App-intro">
						<Clock />
					</p>
				</div>
			</div>
		);
	}
}

export default App;
