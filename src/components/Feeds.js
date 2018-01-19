import React from'react';
import Card,{CardContent,CardHeader,CardMedia,CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import PropTypes from 'prop-types';

const styles=theme=>({
  bottomActions: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
  button: {
    borderRadius: '100px',
    textTransform: 'capitalize',
    color:'white',
    backgroundColor: theme.palette.secondary.A400,
    padding: 0,
    marginTop: 5
  },
  content: {
    margin: '0px 20px',
    padding: 10
  },
  media: {
    height: '600px',
    border: '1px solid grey',
  },
  moreIcon: {
    marginRight: 10
  },
});


class Feed extends React.Component { 
  render() {
     const {classes}=this.props;
    return(
      <div>  
         <Card square>
            <CardHeader
              avatar={<Avatar src={this.props.data.profileimg}/>}
              title={this.props.data.name}
              subheader= {<span>{this.props.data.tid} •{this.props.data.time}</span>}
              action={<ExpandMoreIcon className={classes.moreIcon}/>}
            />
            <CardContent className={classes.content}>
              <Typography>
               {this.props.data.content}
              </Typography>
              {this.props.data.image && (<CardMedia
                image={this.props.data.image}
                className={classes.media}
              />)}
             </CardContent>
              <CardActions className={classes.bottomActions}>
                <Icon className='fa fa-comment-o'></Icon>
                <Icon className='fa fa-retweet'></Icon>
                <Icon className='fa fa-heart-o'></Icon>
                <Icon className='fa fa-envelope-o'></Icon>
              </CardActions>
        </Card>
        <Divider/>
      </div>);
  }
  }



Feed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feed);