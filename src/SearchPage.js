import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'
import './App.css'

class SearchPage extends Component {

    state={
        query: '',
        bookResults: []
    }

    updateQuery = (query) => {
        this.setState({ query });
        this.getBookResults(query)
    }
   
    // if an existing book is searched, display it; otherwise leave the page empty 
    getBookResults = (query) => {
        if (query) {
            BooksAPI.search(query).then((bookResults) => {
                if (bookResults.error) { 
                    document.getElementById("book-results").style.padding = "0 10px 20px 20px";
                    this.setState({ bookResults: [] })
                } else {
                    document.getElementById("book-results").style.padding = "80px 10px 20px 20px";
                    this.setState({ bookResults })
                }
            })
        } else {
            document.getElementById("book-results").style.padding = "0 10px 20px 20px";
            this.setState({ bookResults: [] })
        }
    }

    render() {
        // display the searched books on the right (or none) shelf 
        this.state.bookResults.map((bookResults) => {
            bookResult.shelf = "none";
            return (
                this.props.books.map((book) => {
                    bookResult.id === book.id ? bookResult.shelf = book.shelf : "";
                    return bookResult.shelf;
                }
            ))})

        return ( 
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>  
                        <div className="search-books-input-wrapper" >
                            <input type="text"
                             placeholder="Search by title or author"
                             value={ this.state.query }
                             onChange={(event) => this.updateQuery(event.target.value)}/>  
                        </div>
                 </div >
                 <div id="book-results" className="search-books-results" >
                     <ol className="books-grid" > 
                         { this.state.bookResults.map((bookResult) => (<li key={ bookResult.id }>
                             <Book 
                                 book={ bookResult }
                                 shelfUpdate={ this.props.shelfUpdate }
                             /> 
                         </li>))} 
                     </ol>
                 </div>
            </div>
        );
    }
}

export default SearchPage
