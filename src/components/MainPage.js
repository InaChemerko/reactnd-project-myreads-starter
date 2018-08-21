import React, { Component } from 'react';
import Shelf from './Shelf'


class MainPage extends Component {
  render() {

		return(

			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <Shelf title='Currently Reading' shelfValue='currentlyReading' booksList={this.props.booksList}/>
                <Shelf title='Want to Read' shelfValue='wantToRead' booksList={this.props.booksList}/>
                <Shelf title='Read' shelfValue='read' booksList={this.props.booksList}/>
          </div>
            </div>      
                
            <div className="open-search">
              <a >Add a book</a>
            </div>
            </div>


			)
	}
}

export default MainPage