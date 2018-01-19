import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TitleOfCard from './cardtitle';

const styles = theme=>({
  card: {
    maxWidth: 345,
   
  },
  media: {
    height: 110,
  },
   title: {
    fontWeight: 600,
    marginTop: -10
  },
  subtitle: {
    fontSize: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  trends: {
    fontWeight: 'bold',

    paddingTop:10
  },
  link: {
  color: theme.palette.secondary.A700,
  textDecoration: 'none',
  '&:hover':{
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary.A400
  },
},
});

function TrendsCard(props) {
  const { classes } = props;
  return (
      <Card>
        <CardContent>
          <TitleOfCard title='Trends for you' subtitle1='Change'/>   
        </CardContent>
        <CardContent style={{paddingTop:0}}>
          <Typography type='body1' className={classes.trends}><a className={classes.link} href=''>#HappyLohri</a></Typography>
          <Typography type='caption'>India's biggest names celebrate the festival</Typography>
          <Typography type='body1' className={classes.trends}><a className={classes.link} href=''>#HappyLohri</a></Typography>
          <Typography type='caption'>India's biggest names celebrate the festival</Typography>
          <Typography type='body1' className={classes.trends}><a className={classes.link} href=''>#HappyLohri</a></Typography>
          <Typography type='caption'>India's biggest names celebrate the festival</Typography>
          <Typography type='body1' className={classes.trends}><a className={classes.link} href=''>#HappyLohri</a></Typography>
          <Typography type='caption'>India's biggest names celebrate the festival</Typography>
          <Typography type='body1' className={classes.trends}><a className={classes.link} href=''>#HappyLohri</a></Typography>
          <Typography type='caption'>India's biggest names celebrate the festival</Typography>
          <Typography type='body1' className={classes.trends}><a className={classes.link} href=''>#HappyLohri</a></Typography>
          <Typography type='caption'>India's biggest names celebrate the festival</Typography>
        </CardContent>
      </Card>
      );
}


export default withStyles(styles)(TrendsCard);