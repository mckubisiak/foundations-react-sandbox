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
                        <p>{marble.name}</p>
                        <p>{marble.image}</p>
                        <p>{marble.description}</p>
                        <p>{marble.rarity_id}</p>
                        <p>{marble.price}</p>
                        <p>{marble.cost}</p>
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}