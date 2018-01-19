import React from 'react';
import Grid from 'material-ui/Grid';
import Feed from './Feeds';



export default class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state={
     tweets: 
     [
     {id: 1,profileimg:'images/p3.jpg',name:'The Practical Dev',tid:'@ThePracticalDev',time:'16m',content:`The human side of software development"It seems that many people tend to neglect the side of development that hasn't got too much to do with machines..."`, image: 'images/p3tweet.jpg'},
     {id:2,profileimg:'images/p1.png',name:'Node.js',tid:'@nodejs',time:'5h',content:'Where do you go to find news or resources around JavaScript, web development, app development?',image:''},
     {id: 3,profileimg:'images/p2.jpg',name:'CommitStrip',tid:'@commitStrip',time:'3h',content:`What if it’s only one character off? `, image: 'images/p2tweet.jpg'}
     ]
   };
  }
  render() {
   return (
    <Grid container spacing={24}>
      {this.state.tweets.map((tweet)=><Grid key={tweet.id.toString()} item xs={12}><Feed  data={tweet}/></Grid>)}    
    </Grid>
    );
  }
}
   

   


/*

    
*/
