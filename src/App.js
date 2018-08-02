import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './HomePage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
   
    state={
        books: []
    }

    componentDidMount() {
        this.getAllBooks();
    }
            
    shelfUpdate = (book, shelf) => {
        BooksAPI.update(book, shelf);
        this.getAllBooks();
    }

    getAllBooks() {
        BooksAPI.getAll().then(books => this.setState({ books })); 
    } 

    render() {
       
        const currentlyReading = this.state.books.filter((book) => book.shelf === 'currentlyReading');
        const wantToRead = this.state.books.filter((book) => book.shelf === 'wantToRead');
        const read = this.state.books.filter((book) => book.shelf === 'read');      
   
    return (
        <div className="app">
            <Route exact path="/" render={ () => (
                <HomePage
                    currentlyReading={ currentlyReading }
                    wantToRead={ wantToRead }
                    read={ read }
                    shelfUpdate={ this.shelfUpdate }/>
                )} 
            />
            <Route path="/search" render={ () => (
                <SearchPage
                    books={ this.state.books }
                    shelfUpdate={ this.shelfUpdate }/>
                )}
            />
        </div>
     );
   }
}

export default BooksApp
