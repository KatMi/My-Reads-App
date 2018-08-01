import React, { Component } from 'react'
import Book from './Book'
  
class Shelf extends Component { 
   render () {
        return (
           <div className="bookshelf">
               <h2 className="bookshelf-title">{ this.props.title }</h2>
                   <div className="bookshelf-books">
                       <ol className="books-grid">
                           { this.props.books.filter((book) => book.shelf === this.props.shelf)
				                .map((book) => (
                                    <li key={ book.id }>
							            <Book 
								            book={ book }
								            shelfUpdate={ this.state.shelfUpdate }
							             />
                                    </li>
                                 ))
                             }
                        </ol>
                    </div>
            </div>
        );
    }
}

export default Shelf
