import React, { Component } from 'react'
import NameTag from './NameTag.js';

export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.props.title}</h2>
                </section>
            </main>
        )
    }
}
