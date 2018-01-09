import React from'react';
import Card,{CardContent,CardHeader,CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import hasura from './components/hasura.jpg'
import hasuratweet from './components/hasuratweet.png';


export default class Feed extends React.Component {
  render() {
    return(
      <div>
        <Card square='true'>
            <CardHeader
              avatar={<Avatar src={hasura}/>}
              title='Hasura'
              subheader='@HasuraHQ'
            />
            <CardContent>
              <Typography>
                Announcing the first Hasura #Pub2Hub Community Challenge - Chatbots! Build #chatbots on Hasura and publish to Hasura Hub to win goodies! Get started with the quickstarts we have for #slack, #intercom, #messenger & #alexa. Check out http://challenges.hasura.io   
                #appdev #productivity
              </Typography>
              <CardMedia
                image={hasuratweet}
                style={{height: 350}}
              />
            </CardContent>
        </Card>
         <Card square='true'>
            <CardHeader
              avatar={<Avatar src={hasura}/>}
              title='Google Studdents'
              subheader='@googlestudents'
            />
            <CardContent>
              <Typography>
               Don't let another year pass by—if you're passionate about something, don't worry about what others will say. Go after it with everything you've got! #TuesdayThoughts
              </Typography>
              <CardMedia
                image={hasuratweet}
                style={{height: 350}}
              />
            </CardContent>
        </Card>
      </div>);
  }
}