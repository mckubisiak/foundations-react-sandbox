import React, { Component } from 'react'
import { getAllRaritys, getOneMarble, updateMarble } from './fetch-utils';

export default class DetailPage extends Component {
    state = {
        name: '',
        image: '',
        description: '',
        price: '',
        cost: '',
        rarity_id: 1,
        raritys: []
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        const marble = await getOneMarble(id);
        const raritys = await getAllRaritys();
        this.setState({
            name: marble.name,
            image: marble.image,
            description: marble.description,
            rarity_id: marble.rarity_id,
            cost: marble.cost,
            price: marble.price,
            raritys: raritys
        })
    }

    handleNameChange = e => {
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

    handleImageChange = e => {
        this.setState({ image: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await updateMarble(this.props.match.params.id, {
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
                <h2>Update item</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Description
                        <input value={this.state.description} onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        Image
                        <input value={this.state.image} onChange={this.handleImageChange} />
                    </label>
                    <label>
                        Price
                        <input type='number' value={this.state.price} onChange={this.handlePriceChange} />
                    </label>
                        Cost
                    <label>
                        <input type='number' value={this.state.cost} onChange={this.handleCostChange} />
                    </label>

                    <label>
                        rarity
                        <select onChange={this.handleRarityChange}>
                            {this.state.raritys.map(rarity => 
                                <option
                                    selected={rarity.id === this.state.rarity_id} 
                                    value={rarity.id}>
                                    {rarity.rarity}
                                </option>)}
                        </select>
                    </label>

                    <button>Update!</button>
                </form>
            </div>
        )
    }
}