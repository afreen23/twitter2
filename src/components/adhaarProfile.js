import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme=>({
  card: {
    maxWidth: 300,
    margin: '20px 0px' 
  },
  media: {
    height: 110,
  },
  avatar: {
    margin: '-60px 0 0 0',
    width: 90,
    height: 90,
    align: 'left'
  },
  butContainer: {
    display: 'flex',
    alignItems: 'flex-start'
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
    marginTop: '10px'
  },
  content: {
    marginTop: '-10px'
  },
   title: {
    fontWeight: 600,
    marginTop: -10
  },
  subtitle: {
    fontSize: 15
  },
  link: {
  textDecoration: 'none',
  color: theme.palette.secondary.A400,
  '&:hover':{
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary.A700
  },  
},
people: {
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'baseline'
},
});

function AdhaarProfile (props) {
  const { classes } = props;
  return (
   <div>
    <div className={classes.people}>
      <Typography type='display1'>People</Typography>
      <Typography component='div'><a href='' className={classes.link}>View All</a></Typography>
    </div>
      <Card square className={classes.card}>
        <CardMedia
          className={classes.media}
          image="images/headerphoto.jpg"
          title="Contemplative Reptile"
        />
        <CardHeader
          avatar={<Avatar alt="Profile Pic" src="images/adhaar.jpg" className={classes.avatar} />}
          action={
            <div className={classes.butContainer}>
              <Button  className={classes.button}>Follow</Button>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
            }
          /> 
         <CardContent className={classes.content}>
           <Typography type='title' className={classes.title}>Adhaar</Typography>
           <Typography type='caption' className={classes.subtitle}>@UIDAI</Typography><br/>
           <Typography type='body1'>Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements</Typography>
         </CardContent>
      </Card>
    </div>
   
  );
}

AdhaarProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdhaarProfile );