import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import TrendsCard from './trendsCard';

const styles = theme=>({
  card: {
    maxWidth: 345 
  },
  media: {
    height: 250,
  },
  avatar: {
    margin: '-60px 0 0 0',
    width: 90,
    height: 90,
    align: 'left'
  },
   title: {
    fontWeight: 600,
    marginTop: -10
  },
  subtitle: {
    fontSize: 15
  },
  trends: {
    fontWeight: 'bold',
    color: theme.palette.secondary,
    paddingTop:10
  },
  link: {
  '&:hover':{
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary
  },
  textDecoration: 'none',
  color: theme.palette.secondary,
  
},
});

function AdhaarProfile (props) {
  const { classes } = props;
  return (
   
      <Card square>
        <CardMedia
          className={classes.media}
          image="images/headerphoto.jpg"
          title="Contemplative Reptile"
        />
          <CardHeader
          avatar={<Avatar alt="Profile Pic" src="images/adhaar.jpg" className={classes.avatar} />}
          /> 
         <CardContent style={{display:'flex',justifyContent: 'space-around'}}>
           <div style={{display:'flex',flexDirection:'column'}}><p style={{margin:0}}><b>Tweets</b></p><p style={{margin:0}}>25</p></div>
           <div style={{display:'flex',flexDirection:'column'}}><p style={{margin:0}}><b>Following</b></p><p style={{margin:0}}>25</p></div>
           <div style={{display:'flex',flexDirection:'column'}}><p style={{margin:0}}><b>Followers</b></p><p style={{margin:0}}>25</p></div>
         </CardContent>
          <CardHeader
          title={<Typography type='title' className={classes.title}>Afreen Rahman</Typography>}
          subheader={<Typography type='caption' className={classes.subtitle}>@aren_rahman</Typography>}
         /> 
      </Card>
 
   
  );
}

AdhaarProfile .propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdhaarProfile );