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
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import FollowCard from './FollowCard';
import TrendsCard from './trendsCard';
import Card, {CardContent} from 'material-ui/Card';
import TitleOfCard from './cardtitle';
import AdhaarProfile from './adhaarProfile';

const styles = theme => ({
  appbar : {
  	height: '46px',
	  backgroundColor: theme.palette.primary[50],
    elevation: 0
  },
  avatar: {
    marginTop: 3
  },
  bottomBar: {
    height: '46px',
    position: 'relative',
    top: 20,
     width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
  },
   middleBar: {
     position: 'relative',
     top: 20,
     left: -8,
     width: '100%',
     height: '46px',
     backgroundColor: theme.palette.secondary.A700,
     color: 'white'
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
    color: theme.palette.accent
  },
   bottomLinks: {
  '&:hover':{
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary
  },
  '&:visited' : {
    color: theme.palette.secondary
  },
  textDecoration: 'none',
  color: 'grey',
  padding: '0px 4px'
}
});


class Adhaar extends React.Component {
  state = {
    value: 'one',
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
              <Tab label="Moments" href='/' className={classes.tab}/>
              <Tab label="Messages" href='/' className={classes.tab}/>
              <Tab label="Notifications" href="/" className={classes.tab} />
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
          <Toolbar className={classes.middleBar}>
            <Typography type='display1'>#adhaar</Typography>
          </Toolbar>
              <Toolbar className={classes.bottomBar}>
            <Tabs value={value} onChange={this.handleChange} className={classes.leftNav} indicatorColor='accent'>
              <Tab value='one' label="Top" href='/search'className={classes.tab} />
              <Tab value='two' label="Latest" className={classes.tab}/>
              <Tab value='three'label="People" className={classes.tab}/>
              <Tab value='four' label="Photos" href="#basic-tabs" className={classes.tab} />
              <Tab value='five' label="Videos" href="#basic-tabs" className={classes.tab} />
              <Tab value='six'  label="News" href="#basic-tabs" className={classes.tab} />
              <Tab value='seven' label="Broadcast" href="#basic-tabs" className={classes.tab} />
            </Tabs>
          </Toolbar>
        </Grid>
        <Grid item xs={3}>
          {value === 'one' && <Grid container spacing={24}>
                            <Grid item xs={12}><Card><CardContent><TitleOfCard title='Search Filters' subtitle1='Show'/></CardContent></Card></Grid>
                            <Grid item xs={12}><FollowCard/></Grid>
                            <Grid item xs={12}><TrendsCard/></Grid>
                            <Grid item xs={12}>
                              <Typography component='p' type='caption'>
                                <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
                                <a href='' className={classes.bottomLinks}>About</a>
                                <a href='' className={classes.bottomLinks}>Help Center</a>
                                <a href='' className={classes.bottomLinks}>Terms</a><br/>
                                <a href='' className={classes.bottomLinks}>Privacy Policy</a>
                                <a href='' className={classes.bottomLinks}>Cookies</a>
                                <a href='' className={classes.bottomLinks}>Ads</a>
                                <a href='' className={classes.bottomLinks}>Info</a>
                              </Typography>
                            </Grid>
                          </Grid>
                          }
          {value === 'two' && <Grid container spacing={24}>
                            <Grid item xs={12}><Card><CardContent><TitleOfCard title='Search Filters' subtitle1='Show'/></CardContent></Card></Grid>
                            <Grid item xs={12}><FollowCard/></Grid>
                            <Grid item xs={12}><TrendsCard/></Grid>
                            <Grid item xs={12}>
                              <Typography component='p' type='caption'>
                                <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
                                <a href='' className={classes.bottomLinks}>About</a>
                                <a href='' className={classes.bottomLinks}>Help Center</a>
                                <a href='' className={classes.bottomLinks}>Terms</a><br/>
                                <a href='' className={classes.bottomLinks}>Privacy Policy</a>
                                <a href='' className={classes.bottomLinks}>Cookies</a>
                                <a href='' className={classes.bottomLinks}>Ads</a>
                                <a href='' className={classes.bottomLinks}>Info</a>
                              </Typography>
                            </Grid>
                          </Grid>
                          }
        {value === 'three' && <Grid container spacing={24}>
                            <Grid item xs={12}><Card><CardContent><TitleOfCard title='Search Filters' subtitle1='Show'/></CardContent></Card></Grid>
                            <Grid item xs={12}><FollowCard/></Grid>
                            <Grid item xs={12}><TrendsCard/></Grid>
                            <Grid item xs={12}>
                              <Typography component='p' type='caption'>
                                <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
                                <a href='' className={classes.bottomLinks}>About</a>
                                <a href='' className={classes.bottomLinks}>Help Center</a>
                                <a href='' className={classes.bottomLinks}>Terms</a><br/>
                                <a href='' className={classes.bottomLinks}>Privacy Policy</a>
                                <a href='' className={classes.bottomLinks}>Cookies</a>
                                <a href='' className={classes.bottomLinks}>Ads</a>
                                <a href='' className={classes.bottomLinks}>Info</a>
                              </Typography>
                            </Grid>
                          </Grid>
                          }
        {value === 'four' && <Grid container spacing={24}>
                            <Grid item xs={12}><Card><CardContent><TitleOfCard title='Search Filters' subtitle1='Show'/></CardContent></Card></Grid>
                            <Grid item xs={12}><FollowCard/></Grid>
                            <Grid item xs={12}><TrendsCard/></Grid>
                            <Grid item xs={12}>
                              <Typography component='p' type='caption'>
                                <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
                                <a href='' className={classes.bottomLinks}>About</a>
                                <a href='' className={classes.bottomLinks}>Help Center</a>
                                <a href='' className={classes.bottomLinks}>Terms</a><br/>
                                <a href='' className={classes.bottomLinks}>Privacy Policy</a>
                                <a href='' className={classes.bottomLinks}>Cookies</a>
                                <a href='' className={classes.bottomLinks}>Ads</a>
                                <a href='' className={classes.bottomLinks}>Info</a>
                              </Typography>
                            </Grid>
                          </Grid>
                          }
        {value === 'five' && <Grid container spacing={24}>
                            <Grid item xs={12}><Card><CardContent><TitleOfCard title='Search Filters' subtitle1='Show'/></CardContent></Card></Grid>
                            <Grid item xs={12}><FollowCard/></Grid>
                            <Grid item xs={12}><TrendsCard/></Grid>
                            <Grid item xs={12}>
                              <Typography component='p' type='caption'>
                                <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
                                <a href='' className={classes.bottomLinks}>About</a>
                                <a href='' className={classes.bottomLinks}>Help Center</a>
                                <a href='' className={classes.bottomLinks}>Terms</a><br/>
                                <a href='' className={classes.bottomLinks}>Privacy Policy</a>
                                <a href='' className={classes.bottomLinks}>Cookies</a>
                                <a href='' className={classes.bottomLinks}>Ads</a>
                                <a href='' className={classes.bottomLinks}>Info</a>
                              </Typography>
                            </Grid>
                          </Grid>
                          }
        {value === 'six' && <Grid container spacing={24}>
                            <Grid item xs={12}><Card><CardContent><TitleOfCard title='Search Filters' subtitle1='Show'/></CardContent></Card></Grid>
                            <Grid item xs={12}><FollowCard/></Grid>
                            <Grid item xs={12}><TrendsCard/></Grid>
                            <Grid item xs={12}>
                              <Typography component='p' type='caption'>
                                <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
                                <a href='' className={classes.bottomLinks}>About</a>
                                <a href='' className={classes.bottomLinks}>Help Center</a>
                                <a href='' className={classes.bottomLinks}>Terms</a><br/>
                                <a href='' className={classes.bottomLinks}>Privacy Policy</a>
                                <a href='' className={classes.bottomLinks}>Cookies</a>
                                <a href='' className={classes.bottomLinks}>Ads</a>
                                <a href='' className={classes.bottomLinks}>Info</a>
                              </Typography>
                            </Grid>
                          </Grid>
                          }
        {value === 'seven' && <Grid container spacing={24}>
                            <Grid item xs={12}><Card><CardContent><TitleOfCard title='Search Filters' subtitle1='Show'/></CardContent></Card></Grid>
                            <Grid item xs={12}><FollowCard/></Grid>
                            <Grid item xs={12}><TrendsCard/></Grid>
                            <Grid item xs={12}>
                              <Typography component='p' type='caption'>
                                <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
                                <a href='' className={classes.bottomLinks}>About</a>
                                <a href='' className={classes.bottomLinks}>Help Center</a>
                                <a href='' className={classes.bottomLinks}>Terms</a><br/>
                                <a href='' className={classes.bottomLinks}>Privacy Policy</a>
                                <a href='' className={classes.bottomLinks}>Cookies</a>
                                <a href='' className={classes.bottomLinks}>Ads</a>
                                <a href='' className={classes.bottomLinks}>Info</a>
                              </Typography>
                            </Grid>
                          </Grid>
                          }                          
        </Grid>
        <Grid item xs={6}>
          {value === 'one' && (<div><AdhaarProfile/><Tweet/></div>)}
          {value === 'two' && (<div><AdhaarProfile/><Tweet/></div>)}
          {value === 'three' &&(<div><AdhaarProfile/><Tweet/></div>)}
          {value === 'four' && (<div><AdhaarProfile/><Tweet/></div>)}
          {value === 'five' && (<div><AdhaarProfile/><Tweet/></div>)}
          {value === 'six' && (<div><AdhaarProfile/><Tweet/></div>)}
          {value === 'seven' && (<div><AdhaarProfile/><Tweet/></div>)}
        </Grid>
      </Grid>
    );
  }
}

Adhaar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Adhaar);