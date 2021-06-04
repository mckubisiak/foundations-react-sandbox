import React, { Component } from 'react'
import request from 'superagent';

export default class FuturamaQuotes extends Component {
    state = { 
        quotes: [],
        searchQuery: ''
     }

    handleClick = async () => {
        const data = await request.get(`https://futuramaapi.herokuapp.com/api/quotes?search=${this.state.searchQuery}`);

        this.setState({ quotes: data.body });
    }

    handleChange = e => {
        this.setState({ searchQuery: e.target.value })
    }

    render() {

        return (
            <div className="center">
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>Search!</button>
                { this.state.quotes.map(quote => 
                    <p>
                        <img width="30" src={quote.image} alt={quote.character} />
                        {quote.character} 
                        says: 
                        <em> "{quote.quote}"</em>
                    </p>)}
            </div>
        )
    }
}
