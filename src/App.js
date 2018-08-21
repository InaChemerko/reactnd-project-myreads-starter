import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'

class BooksApp extends React.Component {
  state = {
     booksList: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
  }
//retrieve info about books
  componentDidMount(){
    BooksAPI.getAll().then((booksList) => {
      this.setState({ booksList })
    })

  }

  

  render() {
    return (
      <div className="app">
        <SearchPage booksList={this.state.booksList} />
          
        <MainPage   booksList={this.state.booksList} />
          
       
      </div>
    )
  }
}

export default BooksApp
