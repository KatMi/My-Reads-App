import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'


class HomePage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf title='Currently Reading' shelf='currentlyReading' books={ this.props.currentlyReading } shelfUpdate={ this.props.shelfUpdate }/>
                        <Shelf title='Want to Read' shelf='wantToRead' books={ this.props.wantToRead } shelfUpdate={ this.props.shelfUpdate }/>
                        <Shelf title='Read' shelf='read' books={ this.props.read } shelfUpdate={ this.props.shelfUpdate }/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default HomePage
