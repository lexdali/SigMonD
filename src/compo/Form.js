import React, { Component } from 'react'


//Form Controlled Component
//Three Easy steps:
//1. Add HTML
//2. Assign the state
//3. Assign change handler

export class Form extends Component 
{
    constructor(props) 
    {
      super(props)
    
      this.state = {
         fullName: '',
         //Assign states

      }
    }

    handleFullNameChange = (event) => {
      this.setState({
        fullName: event.target.value
      })
    }

    handleSubmit = (event) => 
    {
      //alert(`Your name: ${this.state.fullName}`);
      //Store data in object
      let data = {
        "fullName": this.state.fullName
      }
      
      alert();

      event.preventDefault();
    }


  render() {
    return(
        
        <form onSubmit={this.handleSubmit}>
            <label>Full Name:</label>
            <input className="fullName" type="text" 
            value={this.state.fullName}
            onChange={this.handleFullNameChange} />

            <br />
            <br />
            <button type='submit'>Submit</button>
            
        </form>

    )
  }
}

export default Form