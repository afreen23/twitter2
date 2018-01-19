import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Icon from 'material-ui/Icon';
import IntegrationAutoSuggest from './search';
import Button from 'material-ui/Button';
import Tweet from './Tweet';
import RightDashboard from './rightDashboard';
import Avatar from 'material-ui/Avatar';
import LeftDashboard from './leftDashboard';
import AddTweet from './newTweet.js';


const styles = theme => ({
  appbar : {
  	height: '46px',
	  backgroundColor: theme.palette.primary[50],
    elevation: 0
  },
  avatar: {
    
  },
  button: {
    borderRadius: '100px',
    textTransform: 'capitalize',
    color:'white',
    backgroundColor: theme.palette.secondary.A400,
    padding: 0,
    marginTop: 5
  },
  leftNav: {
  	centered: {
  	justifyContent: 'flex-start',
  },
  	flexBasis: '40%',
  },
  rightNav: {
  	marginTop: 0,
  	height: '46px',
  	display: 'flex',
  	flexBasis:'35%',
  	justifyContent:'space-around',
  	alignItems: 'flex-start',
  	alignSelf: 'flex-start',
  },
  root: {
    marginTop: 0,
  },
  tab : {
  	minWidth: '10px',
    textTransform:'capitalize',
    fontWeight: 'bold'
  },
  toolbar: {
    flex: 1,
    height:'46px',
    marginTop: 0,
    alignItems: 'baseline',
    justifyContent: 'space-around',
    
  },
  twitter: {
    color: theme.palette.accent,
  }
});


class Header extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid container className={classes.root} spacing={40}>
        <Grid item xs={12}>
          <AppBar className={classes.appbar}>
           <Toolbar className={classes.toolbar}>
            <Tabs value={value} onChange={this.handleChange} className={classes.leftNav} indicatorColor='accent'>
              <Tab label="Home" href='/'className={classes.tab} />
              <Tab label="Moments" className={classes.tab}/>
              <Tab label="Messages" className={classes.tab}/>
              <Tab label="Notifications" href="#basic-tabs" className={classes.tab} />
            </Tabs>
            <div className={classes.twitter}>
             <Icon className="fa fa-twitter" color="accent"></Icon>
            </div>
            <div className={classes.rightNav}>
  	          <IntegrationAutoSuggest/>
  	          <Avatar alt="Remy Sharp" src="images/profileimage.jpg" className={classes.avatar} />
  	          <Button color="accent" className={classes.button}>
  	            Tweet
  	          </Button> 
           </div>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={3}>
          {value === 0 && <LeftDashboard/>}
          {value === 1 && <LeftDashboard/>}
          {value === 2 && <LeftDashboard/>}
          {value === 3 && <LeftDashboard/>}
        </Grid>
        <Grid item xs={6}>
          {value === 0 && <div><AddTweet/><Tweet /></div>}
          {value === 1 && <div><AddTweet/><Tweet /></div>}
          {value === 2 && <div><AddTweet/><Tweet /></div>}
          {value === 3 && <div><AddTweet/><Tweet /></div>}
        </Grid>
        <Grid item xs={3}>
          {value === 0 && <RightDashboard/>}
          {value === 1 && <RightDashboard/>}
          {value === 2 && <RightDashboard/>}
          {value === 3 && <RightDashboard/>}
        </Grid>
      </Grid>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);