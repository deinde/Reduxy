import { combineReducers } from 'redux';
// books becomes the universal app object that will be accessed
//by react-redux 'connect' as 'state.books' very important!!!!
// its value is set by importing BookReducer from reducer_books
import BooksReducer from './reducer_books';
import ActiveBook from './reducers_active_book';
//These keys below (added to combineReducers) wind up as keys on the
//Global state ie books, activeBook  ex books.titl, activeBook
const rootReducer = combineReducers({
 books: BooksReducer,
 activeBook : ActiveBook
});

export default rootReducer;
