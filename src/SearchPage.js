import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'
import './App.css'

class SearchPage extends Component {

    state={
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query });
        this.updateBooks(query)
    }
   
    updateBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((books) => {
                if (books.error) { 
                    document.getElementById("book-results").style.padding = "0 10px 20px 20px";
                    this.setState({ books: [] })
                } else {
                    document.getElementById("book-results").style.padding = "80px 10px 20px 20px";
                    this.setState({ books })
                }
            })
        } else {
            document.getElementById("book-results").style.padding = "0 10px 20px 20px";
            this.setState({ books: [] })
        }
    }

    render() {
        
        this.state.books.map((books) => {
            books.shelf = "none"
            this.state.books.map((book) => {
                books.id === book.id ? books.shelf=book.shelf : ""}
            )})

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
                         { this.state.books.map((book) => (<li key={ book.id }>
                             <Book 
                                 book={ book }
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
