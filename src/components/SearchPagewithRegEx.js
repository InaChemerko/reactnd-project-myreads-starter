//using RegEx, not import

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

import escapeRegExp from 'escape-string-regexp';

class SearchPage extends Component {

  state={
    query:'',
    booksSearch: []
    
  }

  updateQuery = (query) => {
    this.setState({ query })
   if (query) {
            BooksAPI.search(query).then((booksSearch) => {
                if (booksSearch.error) { 
                    this.setState({ booksSearch: [] })
                } else {
                    this.setState({ booksSearch: booksSearch })
                }
            })
        } else { this.setState({ booksSearch: [] })
        }
  }
    
  render(){
    //console.log(this.props.booksList)

    let matchingBooks;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      matchingBooks = this.state.booksSearch.filter((book) => match.test(book.title))

    } else {
      matchingBooks = this.state.booksSearch
    }

    
    return(

      <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
             { matchingBooks.map((matchingBook) => {
              matchingBook.shelf ='none';
              this.props.booksList.map(book => (
                book.id === matchingBook.id ? 
                matchingBook.shelf=book.shelf : ''))

              return (
                

              <li key={ matchingBook.id }>
                             <Book 
                                 book={ matchingBook }
                                 updateBooks={ this.props.updateBooks }
                             /> 
                         </li>
                         ) 


             } )
              } 
              </ol>
            </div>
          </div>





      )
  }
}


export default SearchPage

