import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'


class MainPage extends Component {

   render() {
		return(

			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <Shelf title='Currently Reading' shelfValue='currentlyReading' booksList={this.props.booksList} updateBooks={this.props.updateBooks} />
                <Shelf title='Want to Read' shelfValue='wantToRead' booksList={this.props.booksList} updateBooks={this.props.updateBooks} />
                <Shelf title='Read' shelfValue='read' booksList={this.props.booksList} updateBooks={this.props.updateBooks} />
          </div>
            </div>      
                
            <div className="open-search">
              <Link to="/search" >Add a book</Link>
            </div>
            </div>
			)
	}
}

export default MainPage