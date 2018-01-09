import React from 'react';
import Feed from './Feeds';
import Input from './input';


export default class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state={
     tweets: 
     [
     {profileimg:'https://pbs.twimg.com/media/DSWLVG6W0AAeWed.jpg',name:'Afreen Rahman',tid:'@aren_rahman',time:'33m',content:'happy new year'},
     {profileimg:'',name:'Hasura',tid:'@hasura',time:'22m',content:'sharing love and happiness'}
     ]
   };
  }
  render() {
   return (
    <div> 
      <Feed/>   
    </div>
    );
  }
}
   

   


/*
{this.state.tweets.map(tweet=><Feed data={tweet}/>)} 
    <Input/>
*/
