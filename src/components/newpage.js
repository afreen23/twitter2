import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IntegrationAutoSuggest from './search';
import ImageAvatars from './avatar';
import Button from 'material-ui/Button';
import Tweet from './Tweet';
import SimpleCard from './rightDashboard';
import Avatar from 'material-ui/Avatar';
import SimpleMediaCard from './leftDashboard';
import MoreVertIcon from 'material-ui-icons/MoreVert';


function TabContainer(props) {
  return (
    <Typography component='div'>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,

  },
  appbar : {
  	height: '46px',  	
  },
  appbar2: {
  	height: '46px',
  	top: 48, 	
  },
  appbar3: {
  	height: '46px',
  	top: 95, 	
  },
  toolbar: {
  	flex: 1,
  	height:'46px',
  	marginTop: 0,
  	alignItems: 'baseline',
  	justifyContent: 'space-between',
  	
  },
    toolbarBottom: {
  	flex: 1,
  	height:'46px',
  	marginTop: 0,
  	alignItems: 'baseline',
  	justifyContent: 'space-between',
  	
  },
  twitter: {
  	
  	
  },
  leftNav: {
  	
  	centered: {
  	justifyContent: 'flex-start',

  	
  },
  	flexBasis: '40%',
  	label: {
  	textTransform:'capitalize',
  	
  	}
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
  button: {
  	borderRadius: '100px',
  	textTransform: 'capitalize',
  	color:'white',
  	backgroundColor: theme.palette.secondary.A400,
    padding: 0

  },
  tab : {
  
  	minWidth: '10px'
  
}
});

class Adhaar extends React.Component {
  state = {
    value: 0,
    dataSource: ['adhaar']
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
        </Grid>
        <Grid item xs={12}>
          <AppBar className={classes.appbar2} position='absolute' color='accent'>
           <Toolbar disableGutters='true'>
				<Typography type='display1'>#adhaar</Typography>
           </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <AppBar className={classes.appbar3} position='absolute'>
           <Toolbar className={classes.toolbar}>
				<Tabs value={value} onChange={this.handleChange} className={classes.leftNav}>
					<Tab label="Top" className={classes.tab} />
					<Tab label="Latest" className={classes.tab}/>
					<Tab label="People" className={classes.tab}/>
					<Tab label="Photos" href="#basic-tabs" className={classes.tab} />
					<Tab label="Videos" className={classes.tab}/>
					<Tab label="News" className={classes.tab}/>
					<Tab label="Broadcast" className={classes.tab}/>
				</Tabs>
				<Button>
					<MoreVertIcon />
				</Button>	
           </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={3}>
          {value === 0 && <SimpleMediaCard/>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
          {value === 3 && <TabContainer>Item Four</TabContainer>}
        </Grid>
        <Grid item xs={6}>
          {value === 0 && <Tweet />}
          {value === 1 && <Tweet />}
          {value === 2 && <Tweet />}
          {value === 3 && <Tweet />}
        </Grid>
      </Grid>
    );
  }
}

Adhaar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Adhaar);