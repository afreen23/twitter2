import React from 'react';
import {MuiThemeProvider,createMuiTheme} from 'material-ui/styles';
import {grey,green,red,teal} from 'material-ui/colors';
import Header from './components/header.js';
import Adhaar from './components/adhaar.js';
import { withTheme } from 'material-ui/styles';

import { Switch, Route } from 'react-router-dom';

const theme=createMuiTheme({
	palette: {
		primary: grey,
		secondary: teal,
		accent: green['A100'],
		error: red
	}
});

function App() {
		return(
			<MuiThemeProvider theme={theme}>
				<Switch>
					<Route exact path='/' component={Header}/>
					<Route path='/search/' component={Adhaar}/>
				</Switch>
			</MuiThemeProvider>
			);
	
}

export default withTheme()(App);

/*
<Switch>
					<Route exact path='/' component={Header}/>
					<Route path='/search/:name' component={Adhaar}/>
				</Switch>
*/