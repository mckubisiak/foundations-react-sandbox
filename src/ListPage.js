import React, { Component } from 'react'
import { getAllMarbles } from './fetch-utils'
import { Link } from 'react-router-dom';
export default class ListPage extends Component {
    state = {
        marbleBag: []
    }

    componentDidMount = async () => {
        const marbles = await getAllMarbles();

        this.setState({ marbleBag: marbles })
    }

    render() {
        return (
            <div className="marbles">
                {
                    this.state.marbleBag.map(marble => <Link to={`/Marbles/${marble.id}`}>
                    <div className="marble">
                        <div>{marble.name}</div>
                        <div>{marble.image}</div>
                        <div>{marble.description}</div>
                        <div>{marble.rarity_id}</div>
                        <div>{marble.price}</div>
                        <div>{marble.cost}</div>
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}