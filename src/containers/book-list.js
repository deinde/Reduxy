//This imports react
import React,{Component} from 'react';
//This imports redux-react object so I can connect both libraries together
//and get the connect method
import {connect} from 'react-redux';
//This imports the action creator to handle my click event and call 
//selectBook function in actions folder
import {selectBook} from '../actions/index';
//This will allow actions to pass through ALL reducers till matched
//with switch case
import {bindActionCreators} from 'redux';
//here is the container (smart component) because it is directlly connected
//to redux reducers (app state container)
export class BookList extends Component{
//function that will be called locally to render using {this.renderList()}
//it is mapping through book object and returning individual list items
 renderList(){
 	 return this.props.books.map((book)=>{
 	 	return(
 	 	  <li 
 	 	  	key={book.title} 
 	 	  	onClick={()=>this.props.selectBook(book)}
 	 	  	className='list-group-item'>
 	 	  	{book.title}
 	 	  </li>
 	 	

 	 	 );
 	 });
 }
// this is where the container will render everthing
	render(){
		return(

      
       <ul className='list-group col-sm-4'>
        {this.renderList()}
       </ul>
     )
	 }
}
// // ok, this will take in all of the apps state then return an universal 
// // application object with a books property as key and 'state.books' as a
// //value from application state property(reducers).
// //this will provide the current container 'book-list' its 
// //new state(value)props!!!
// // mapStateToProps brings in state from combineReducer function in 
// // reducers/index.js which imports reducers from reducer_books.js
// // anytime app state changes, so does the new state value(props) mapStateToProps brings
// //in to this container and the new value will be provided (state)props
// // returns prop that will be availbe for use inside this container
//connect is bringing in the universal app state 'state'
function mapStateToProps(state){
 return{
   books: state.books
 };
}
// // making a 'action creator' 'selectBook' available to be called
//clicked
//and return a value that can be use inside this container!!
// // mapDispatchToProps is saying whenever selecBook is called the result
// //should be passed to all of our reducers app wide!!!!! flow through
// //dispach function ,dispatch function recieves and spits it to ALL
// //Reducers ALL of then not one ALL. Switch case is used to funnel correct
// //action!! this will return a new value inside this container that will
// //be available for use
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBook:selectBook},dispatch);
}



// //'connect' is how redux and react connect to each other!!
// //this is now forming a "container" called BookList. 
// //BookList is now the parent component that is directly
// //connected to reducers inside of redux through the connect function!!
// //any time Booklist state changes, BookList component
// // will re-render then MapStateToProps will provide the container the new
// //state value state.books which the component calls 'books'!!!
 export default connect(mapStateToProps,mapDispatchToProps)(BookList);

// // this is coverting this into a container.



// export default connect(mapStateToProps)(BookList);

 




