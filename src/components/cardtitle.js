import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontWeight: 'bold',
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

function TitleOfCard(props) {
  const {classes}=props;
  const bull = <span className={classes.bullet}>•</span>;
  return (
       <Grid container spacing={8} alignItems='center'>
            <Grid item xs={7}>
              <Typography type="headline" className={classes.title}>{props.title}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography type='caption'>
              {bull}<a href='' className={classes.topLinks}>{props.subtitle1}</a>{props.subtitle2 && (<span>{bull}<a href= '' className={classes.topLinks}>{props.subtitle2}</a></span>)}
              </Typography>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(TitleOfCard);