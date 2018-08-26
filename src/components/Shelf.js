import React, { Component } from 'react';
import Book from './Book'


class Shelf extends Component {
  render() {
    //console.log(this.props)
    
		return(

			<div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2> 
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    {this.props.booksList.filter((book) => book.shelf === this.props.shelfValue)
                    .map((bookAfterFilter) => (
                    <li key={bookAfterFilter.id}>
                    <Book book={bookAfterFilter} updateBooks={ this.props.updateBooks }/>
                    </li>

                    ))}
                    
                      
                        
                    </ol>
                  </div>
                </div>


			)
	}
}

export default Shelf