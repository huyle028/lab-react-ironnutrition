import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsFrJson from './foods.json';
import FoodBox from './components/FoodBox'
import { render } from '@testing-library/react';
import Search from './components/Search'

class App extends React.Component {
  state = {
    foods : foodsFrJson,
    searchText : "",
    choseFoods : [],
  };

  handleChoseFood = (chosefood) => {
    console.log(chosefood);
    let choseFoodsCopy = [...this.state.choseFoods];
    let foodIdx = choseFoodsCopy.findIndex(el => el.name===chosefood.name);
    if (foodIdx === -1) {
      choseFoodsCopy.push(chosefood);
    }
    else {
      let foodCopy = {...choseFoodsCopy[foodIdx]};
      choseFoodsCopy.splice(foodIdx,1);
      foodCopy.quantity += chosefood.quantity;
      choseFoodsCopy.push(foodCopy);
    }
    this.setState({choseFoods : choseFoodsCopy});
  }

  handleSearchText = e => {
    this.setState({searchText : e.target.value});
    if (e.target.value !== "")
      this.setState({foods : foodsFrJson.filter (food => food.name.toUpperCase().includes(e.target.value.toUpperCase()))});
    else
      this.setState({foods : foodsFrJson});
  }

  render (){
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <Search searchText={this.state.searchText} searchHandle={this.handleSearchText} />
          <div className="columns">
            <div className="column">
              {
                this.state.foods.map((food, idx) => <FoodBox key={idx} {...food} chooseFoodQuantity={this.handleQuantity} clickToAdd={this.handleChoseFood}/>)
              }
            </div>
            <div className="column content">
              <h2 className="subtitle">Today's foods</h2>
              <ul>
                {this.state.choseFoods.map(food => (<li key={food.name}> {food.quantity} {food.name} = {food.quantity*food.calories} cal</li>))}
              </ul>
              <strong>Total: {this.state.choseFoods.reduce((acc,curVal) => acc + curVal.quantity*curVal.calories,0)} cal</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
