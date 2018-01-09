import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs,Tab} from 'material-ui/Tabs';
import {MuiThemeProvider,createMuiTheme} from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Toolbar from 'material-ui/Toolbar';
import Header from './components/header.js';
import { withTheme } from 'material-ui/styles';


const theme=createMuiTheme({
	palette:{

	primary: purple,
	secondary: {
		...green,
		A400: '#00e677',
	},
	error: red,
   }
});

function App() {
		return(
			<MuiThemeProvider theme={theme}>
				<Header/>
			</MuiThemeProvider>
			);
	
}

export default withTheme()(App);


