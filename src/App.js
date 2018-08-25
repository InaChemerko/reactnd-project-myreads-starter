import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'

class BooksApp extends React.Component {
  state = {
     booksList: []
    
  }
//retrieve info about books
  componentDidMount(){
    BooksAPI.getAll().then((booksList) => {
      this.setState({ booksList })
    })

  }

  
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then(booksList => this.setState({ booksList }))
    
    
  }

  render() {
    return (
      <div className="app">
      <Route path='/search' render={() => (
        <SearchPage booksList={this.state.booksList} updateBooks={this.updateBooks}/>
        )}/>
       <Route exact path='/' render={() => (          
        <MainPage   booksList={this.state.booksList} updateBooks={this.updateBooks}/>
       )}/>      
      </div>
    )
  }
}

export default BooksApp
