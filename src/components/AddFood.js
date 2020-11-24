import React, { Component } from 'react';

class AddFood extends React.Component {
    state = {
        name : "",
        image : "",
        calories : "",
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name] : value});
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.props.onAdd(this.state);
    }
    
    render() {
        return (
          <div>
            <form onSubmit={this.handleFormSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
     
              <label>Image:</label>
              <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
     
              <label>Calories:</label>
              <input type="text" name="calories" checked={this.state.calories} onChange={this.handleChange}/>
              
              <button>Submit</button>
            </form>
          </div>
        )
      }
}

export default AddFood;