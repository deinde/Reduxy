//Reducers typically accept two arguments state and action
//state argument here is not!!! aplication state!!!not! It is the state of only
//reducer it is responsible for!!! A little confusing but that is what it
//is. So it is only the state of active book(value of active book)!
//ie Eloquent , or Harry, not all books in array
//which means the individual book that was passed in and matched
//by the switch statement. ie Harry Potter only, 
//not Harry Potter, Eloquent, Javascript : The Good Parts', Dark Tower etc
//Reducers is just checking to match the correct individual case.
//ex action.type ='BOOK_SELECTED'
// ex action.payload={title:'Harry Potter', pages:40}
//ELSE state = current state (no change)
//null is there for initial start up when no state is available.
// this action.payload is now the global (application)
//level value (state props) which will cause book-details.js container
//to rerender. The new state is available every where so
//mapStateToProps will make this available inside that container as 
// 	book: state.activeBook
//so
//class BookDetail extends Component{
//	render(){
//		if (!this.props.book){
//			return <div>Please Chose A Book Dude!</div>
//		}
//		return(
//			<div>
//        <h3>Details of Book</h3>
//        <div>Title: {this.props.book.title}</div>
//        <div>Pages: {this.props.book.pages}</div>
//      </div>
//	);
//  }
// }
//
//{this.props.book.title} and {this.props.book.pages} will take on
//new state
// the glue between
//redux application state(props value) and react views 
//is export default connect(mapStateToProps)(BookDetail);
//
export default function(state=null, action){
 switch(action.type){
 case 'BOOK_SELECTED':
  return action.payload ;
 }
  return state
}