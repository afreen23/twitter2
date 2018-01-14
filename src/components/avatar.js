import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';



const styles = {
  avatar: {
      border: '1px solid black', 
      margin: '10px 0px ',
    
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
   
      <Avatar alt="Remy Sharp" src="images/googledtudents.jpg" className={classes.avatar} />
   
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);