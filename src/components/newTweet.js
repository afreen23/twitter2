import React from'react';
import Card,{CardContent,CardActions} from 'material-ui/Card';
import {green} from 'material-ui/colors';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';


const styles=theme=>({
  addtweetCard: {
    backgroundColor: green[50],
    color: green[100],
    display:'flex',
    flexDirection: 'column',
  },
  addtweetContent: {
    backgroundColor: green[50],
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    borderRadius: '100px',
    textTransform: 'capitalize',
    color:'white',
    backgroundColor: theme.palette.secondary.A400,
    padding: 0,
    marginTop: 5
  },
   addTweetActions: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: '0px 20px',
    padding: 10
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    color: '#19CF86',
    border: '1px solid #19CF86' ,
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#19CF86',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      color: 'black'
    },
    marginLeft: '5px'
  },
});


class AddTweet extends React.Component {
 state={
  rows: 1,
  show: false
 };

 handleClick=()=> {
  if(!this.state.show){
  this.setState({rows: 4,show: !this.state.show});
  }
  else
    this.setState({rows: 1,show: !this.state.show});
 }
	render() {
		const {classes}=this.props;
		return(
		  <Card className={classes.addtweetCard}>
           <CardContent className={classes.addtweetContent}>
             <Avatar src='images/profileimage.jpg' className={classes.icon}/>
             <TextField
                  fullWidth
                  multiline
                  rows={this.state.rows}
                  placeholder="What's happenning?"
                  InputProps={{
                  disableUnderline: true,
                  classes: {
                  root: classes.textFieldRoot,
                  input: classes.textFieldInput,
                  },
                  }}
                  onClick={this.handleClick}
                />   
           </CardContent>
           {this.state.show &&(<CardActions className={classes.addTweetActions}>
           <div>
             <IconButton color='accent'  className='fa fa-picture-o'/>
             <IconButton color='accent'className='fa fa-video-camera'/>
             <IconButton color='accent'className='fa fa-bar-chart'/>
             <IconButton color='accent'className='fa fa-map-marker'/>
            </div>
            <div>
             <IconButton color='accent'className='fa fa-plus-circle'/>
             <Button color="accent" className={classes.button}>
                Tweet
              </Button>
            </div>
           </CardActions>)}
           <Divider/>
         </Card>
			);
	}

}
export default withStyles(styles)(AddTweet);