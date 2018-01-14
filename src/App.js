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
import Adhaar from './components/newpage.js';
import { Switch, Route } from 'react-router-dom';

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
				<Switch>
					<Route exact path='/' component={Header}/>
					<Route path='/search' component={Adhaar}/>
				</Switch>
			</MuiThemeProvider>
			);
	
}

export default withTheme()(App);


/*
<AppBar className={classes.appbar2} position='absolute'>
				<Toolbar className={classes.toolbar} disableGutters='true'>
					<Typography>#adhaar</Typography>
				</Toolbar>
			</AppBar>
			<AppBar className={classes.appbar3} position='absolute'>
				<Toolbar className={classes.toolbar} disableGutters='true'>
					<Tabs value={value} onChange={this.handleChange} className={classes.leftNav}>
						<Tab label="Home" className={classes.tab} />
						<Tab label="Moments" className={classes.tab}/>
						<Tab label="Messages" className={classes.tab}/>
						<Tab label="Notifications" href="#basic-tabs" className={classes.tab} />
					</Tabs>
					<div className={classes.twitter}>
						<Icon className="fa fa-twitter" color="accent"></Icon>
					</div>
					<div className={classes.rightNav}>
						<IntegrationAutoSuggest/>
						<Avatar alt="Remy Sharp" src="images/googledtudents.jpg" className={classes.avatar} />
						<Button color="accent" className={classes.button}>
						Tweet
						</Button>
					</div>
				</Toolbar>
			</AppBar>
*/