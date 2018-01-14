import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent,CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ImageAvatars from './avatar';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

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
  title: {
    fontWeight: 'bold',
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
  topLinks: {
  '&:hover':{
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary
  },
  textDecoration: 'none',
  color: theme.palette.secondary,
  
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

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container>
     <Grid item xs={12}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Grid container spacing={8} alignItems='center'>
            <Grid item xs={7}>
              <Typography type="headline" className={classes.title}>Who to follow</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography type='caption'>
              {bull}<a href='' className={classes.topLinks} >Refresh</a>{bull}<a href='' className={classes.topLinks}>View All</a>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={3}>
               <Avatar alt="Remy Sharp" src="images/googledtudents.jpg" className={classes.avatar} />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.title2} noWrap>Google Students<span style={{color:'grey'}}>@googleStudentskdsjkdjksjf</span></Typography>
              <Button  className={classes.button}>
              Follow
              </Button>        
            </Grid>   
            <Grid item xs={1}>
              <IconButton  className= 'fa fa-times' aria-label="Delete" />      
            </Grid>      
          </Grid>
          <Divider/>
          <Grid container spacing={8}>
            <Grid item xs={3}>
               <Avatar alt="Remy Sharp" src="images/googledtudents.jpg" className={classes.avatar} />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.title2} noWrap>Google Students<span style={{color:'grey'}}>@googleStudentskdsjkdjksjf</span></Typography>
              <Button  className={classes.button}>
              Follow
              </Button>        
            </Grid>   
            <Grid item xs={1}>
              <IconButton  className= 'fa fa-times' aria-label="Delete" />      
            </Grid>      
          </Grid>
          <Divider/> 
          <Grid container spacing={8}>
            <Grid item xs={3}>
               <Avatar alt="Remy Sharp" src="images/googledtudents.jpg" className={classes.avatar} />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.title2} noWrap>Google Students<span style={{color:'grey'}}>@googleStudentskdsjkdjksjf</span></Typography>
              <Button  className={classes.button}>
              Follow
              </Button>        
            </Grid>   
            <Grid item xs={1}>
             <IconButton  className= 'fa fa-times' aria-label="Delete" />
            </Grid>     
          </Grid>
          <Divider/> 
          <Grid container spacing={8}>
            <Grid item xs={3}>
               <Avatar alt="Remy Sharp" src="images/googledtudents.jpg" className={classes.avatar} />
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.title2} noWrap>Find people you know</Typography>
              <Typography type='caption'>Import your contacts from Gmail</Typography>
            </Grid>      
          </Grid>
          <Divider/>
          <Typography style={{marginTop: '10px'}}><a href='' className={classes.topLinks}>Connect other address books</a></Typography>           
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12}>
     <Card>
        <CardContent>
         <Typography component='p' type='caption'>
          <a href='' className={classes.bottomLinks} style={{}}>&copy;2018 Twitter</a>
          <a href='' className={classes.bottomLinks}>About</a>
          <a href='' className={classes.bottomLinks} href='' className={classes.bottomLinks}>Help Center</a>
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
            

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
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