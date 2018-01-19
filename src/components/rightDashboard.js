import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import FollowCard from './FollowCard';

/*theme.palette.text.secondary*/
const styles = theme => ({
  card: {
    minWidth: 275,

  },
  avatar: {
      margin: '10px 0px ',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title2: {
    fontWeight: 'bold',
    marginTop: '10px'
  },
  button: {
    border: 4,
    borderColor: 'white',
    minWidth: '90px',
    minHeight: '30px',
    borderRadius: '100px',
    textTransform: 'capitalize',
    color: 'white',
    backgroundColor: theme.palette.secondary.A400,
    padding: 0,
    marginBottom: '10px',
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

function RightDashboard(props) {
  const { classes } = props;

  return (
    <Grid container>
     <Grid item xs={12}>
      <FollowCard/>
    </Grid>
    <Grid item xs={12}>
     <Card>
        <CardContent>
         <Typography component='p' type='caption'>
          <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
          <a href='' className={classes.bottomLinks}>About</a>
          <a href='' className={classes.bottomLinks}>Help Center</a>
          <a href='' className={classes.bottomLinks}>Terms</a><br/>
          <a href='' className={classes.bottomLinks}>Privacy Policy</a>
          <a href='' className={classes.bottomLinks}>Cookies</a>
          <a href='' className={classes.bottomLinks}>Ads</a>
          <a href='' className={classes.bottomLinks}>Info</a>
          <a href='' className={classes.bottomLinks}>Brand</a>
          <a href='' className={classes.bottomLinks}>Blog</a><br/>
          <a href='' className={classes.bottomLinks}>Status</a>
          <a href='' className={classes.bottomLinks}>Apps</a>
          <a href='' className={classes.bottomLinks}>Jobs</a>
          <a href='' className={classes.bottomLinks}>Marketing</a>
          <a href='' className={classes.bottomLinks}>Businesses</a><br/>
          <a href='' className={classes.bottomLinks}>Developers</a>
         </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
}
            

RightDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightDashboard);
/*
      <Card>
        <CardContent styel={{display: 'flex'}}>
          <a href='' className={classes.bottomLinks}>&copy;21018 Twitter</a>
          <a href='' className={classes.bottomLinks}>About</a>
          <a href='' className={classes.bottomLinks}>Help Center</a>
          <a href='' className={classes.bottomLinks}>Terms</a>
          <a href='' className={classes.bottomLinks}>Privacy Policy</a>
          <a href='' className={classes.bottomLinks}>Cookies</a>
          <a href='' className={classes.bottomLinks}>Ads</a>
          <a href='' className={classes.bottomLinks}>Info</a>
          <a href='' className={classes.bottomLinks}>Brand</a>
          <a href='' className={classes.bottomLinks}>Blog</a>
          <a href='' className={classes.bottomLinks}>Status</a>
          <a href='' className={classes.bottomLinks}>Apps</a>
          <a href='' className={classes.bottomLinks}>Jobs</a>
          <a href='' className={classes.bottomLinks}>Marketing</a>
          <a href='' className={classes.bottomLinks}>Businesses</a>
          <a href='' className={classes.bottomLinks}>Developers</a>
        </CardContent>
      </Card>
        

*/