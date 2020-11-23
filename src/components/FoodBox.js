import React from 'react';

class FoodBox extends React.Component {
    state = {
        quantity : 1
    };

    handleQuantity = e => {
        if (e.target.value < 0)
            return;

        this.setState({quantity : Number(e.target.value)})
    }
    render () {
        return (
        <div className="box">
            <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                <img src={this.props.image}/>
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories} cal</small>
                </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                <div className="control">
                    <input className="input" type="number" value={this.state.quantity} onChange={this.handleQuantity}/>
                </div>
                <div className="control">
                    <button className="button is-info" onClick = {() => this.props.clickToAdd({name : this.props.name, calories : this.props.calories, quantity : this.state.quantity})}>
                    +
                    </button>
                </div>
                </div>
            </div>
            </article>
        </div>
        );
    }
}

export default FoodBox;