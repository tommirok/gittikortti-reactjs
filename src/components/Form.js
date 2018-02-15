import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  state={ userName: '' };
  handleSubmit = (event) =>{
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`).then(resp =>{
      resp.json().then(data=>{
        this.props.onSubmit(data)
      });
  });
  event.target.reset();

 }

  render(){
    return(
      <form id="formi" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github User" required
          onChange={(event)=>this.setState({userName: event.target.value})} />
        <button onClick={this.reset} type="submit" >Add Card</button>

      </form>
    )
  }
}
