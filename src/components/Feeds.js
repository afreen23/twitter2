import React from'react';
import Card,{CardContent,CardHeader,CardMedia,CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';

const styles={
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  }
}


function Feed(props) {
  const {classes}=props;
    const bull = <span className={classes.bullet}>•</span>;
    return(
      <div>
        <Card square='true'>
             <CardHeader
              avatar={<Avatar src='images/hasura.jpg'/>}
              title='Google Studdents'
              subheader='@googlestudents'
            />
            <CardContent>
              <Typography>
                Announcing the first Hasura #Pub2Hub Community Challenge - Chatbots! Build #chatbots on Hasura and publish to Hasura Hub to win goodies! Get started with the quickstarts we have for #slack, #intercom, #messenger & #alexa. Check out http://challenges.hasura.io   
                #appdev #productivity
              </Typography>
              <CardMedia
                image='images/hasuratweet.png'
                style={{height: 350}}
              />
              <CardActions>
                <Icon className='fa fa-comment-o'></Icon>
                <Icon className='fa fa-retweet'></Icon>
                <Icon className='fa fa-heart-o'></Icon>
                <Icon className='fa fa-envelope-o'></Icon>
              </CardActions>
            </CardContent>
        </Card>
        <Divider/>
         <Card square='true'>
            <CardHeader
              avatar={<Avatar src='images/hasura.jpg'/>}
              title='Google Studdents'
              subheader='@googlestudents'
            />
            <CardContent>
              <Typography>
               Don't let another year pass by—if you're passionate about something, don't worry about what others will say. Go after it with everything you've got! #TuesdayThoughts
              </Typography>
              <CardMedia
                image='images/hasuratweet.png'
                style={{height: 350}}
              />
              <CardActions>
                <Icon className='fa fa-comment-o'></Icon>
                <Icon className='fa fa-retweet'></Icon>
                <Icon className='fa fa-heart-o'></Icon>
                <Icon className='fa fa-envelope-o'></Icon>
              </CardActions>
            </CardContent>
        </Card>
        <Divider/>
        <Card square='true'>
            <CardHeader
              avatar={<Avatar src='images/hasura.jpg'/>}
              title='Google Studdents'
              subheader='@googlestudents'
            />
            <CardContent>
              <Typography>
               Don't let another year pass by—if you're passionate about something, don't worry about what others will say. Go after it with everything you've got! #TuesdayThoughts
              </Typography>
              <CardMedia
                image='images/hasuratweet.png'
                style={{height: 350}}
              />
              <CardActions>
                <Icon className='fa fa-comment-o'></Icon>
                <Icon className='fa fa-retweet'></Icon>
                <Icon className='fa fa-heart-o'></Icon>
                <Icon className='fa fa-envelope-o'></Icon>
              </CardActions>
            </CardContent>
        </Card>
      </div>);

}

export default withStyles(styles)(Feed);