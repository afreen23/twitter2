import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import TitleOfCard from './cardtitle';


const styles = theme => ({
  card: {
    minWidth: 275,

  },
  avatar: {
      margin: '10px 0px ',
    
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

});

function FollowCard(props) {
  const {classes}=props;

  return(
    <Card className={classes.card}>
        <CardContent className={classes.content}>
          <TitleOfCard title='Who to Follow' subtitle1='Refresh' subtitle2='View All'/>
          <Grid container spacing={8}>
            <Grid item xs={3}>
               <Avatar alt="Remy Sharp" src="images/f1.png" className={classes.avatar} />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.title2} noWrap>Dribble<span style={{color:'grey'}}>@dribble</span></Typography>
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
               <Avatar alt="Remy Sharp" src="images/f2.png" className={classes.avatar} />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.title2} noWrap>JSFiddle<span style={{color:'grey'}}>@jsfiddle</span></Typography>
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
               <Avatar alt="Remy Sharp" src="images/f3.png" className={classes.avatar} />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.title2} noWrap>GreenSock<span style={{color:'grey'}}>@greensock</span></Typography>
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
               <Avatar alt="Remy Sharp" src="images/gmail.png" className={classes.avatar} />
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
    );
  }

export default withStyles(styles)(FollowCard);