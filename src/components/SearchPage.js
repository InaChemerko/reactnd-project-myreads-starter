import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component {

  state={
    query:'',
    booksSearch: []
    
  }

  // books search query
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
//display on the shelf
this.state.booksSearch.map((booksSearch) => {
            booksSearch.shelf = "none";
            return (
                this.props.booksList.map((book) => {
                  if (booksSearch.id === book.id) {
                    booksSearch.shelf = book.shelf
                  }
                    return booksSearch.shelf;
                }
            ))})

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
             { this.state.booksSearch.map((booksSearch) => 
              (<li key={booksSearch.id}>
                             <Book 
                                 book={booksSearch}
                                 updateBooks={this.props.updateBooks} /> 
                         </li>))} 
              </ol>
            </div>
          </div>
			)
	}
}


export default SearchPage

