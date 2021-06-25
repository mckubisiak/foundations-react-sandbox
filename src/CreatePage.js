import React, { Component } from 'react'
import { createMarble } from './fetch-utils';

export default class CreatePage extends Component {
    state = {
        name: '',
        image: '',
        description: '',
        price: '',
        cost: '',
        rarity_id: 1,
    }

    handleMarbleChange = e => {
        this.setState({ name: e.target.value });
    }

    handleRarityChange = e => {
        this.setState({ rarity_id: e.target.value });
    }

    handleDescriptionChange = e => {
        this.setState({ description: e.target.value });
    }

    handlePriceChange = e => {
        this.setState({ price: e.target.value });
    }

    handleCostChange = e => {
        this.setState({ cost: e.target.value });
    }
    
    handleSubmit = async e => {
        e.preventDefault();

        await createMarble({
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,
            cost: this.state.cost,
            rarity_id: this.state.rarity_id
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Craft</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type='text' onChange={this.handleNameChange} />
                    </label>
                    <label>
                        image
                        <input type='text' onChange={this.handleImageChange} />
                    </label>
                    <label>
                    description
                        <input type='text' onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        Price
                        <input type='text' onChange={this.handlePriceChange} />
                    </label>
                    <label>
                        Cost
                        <input type='text' onChange={this.handleCostChange} />
                    </label>
                    <label>
                        Complexity
                        <input type='text' onChange={this.handleImageChange} />
                    </label>
                    <label>
                        rarity
                        <select onChange={this.handleRarityChange}>
                            <option value="1">Common</option>
                            <option value="2">Uncommon</option>
                            <option value="3">Rare</option>
                        </select>
                    </label>
                    <button>Craft!</button>
                </form>
            </div>
        )
    }
}