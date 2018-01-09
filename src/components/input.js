import React from 'react';

export default class Input extends React.Component {
 constructor(props) {
    super(props);
    this.state={
       array:['adhaar','aap','aren_rahman','angualr.js'],
       match:[]
    };
    this.handleInput=this.handleInput.bind(this);
  }


handleInput(e) {
    var data=this.state.array;
    var matches=data.filter((element)=>element.search(e.target.value)!=-1);
    this.setState({match: matches});
  }


  render(){
  	return (
		<div>
		   <input type="text" onChange={this.handleInput}/>
           <ul>{this.state.match.map(input=><li>{input}</li>)}</ul>
		</div>
  		);
  }

}