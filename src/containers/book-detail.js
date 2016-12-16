import React, {Component} from 'react';
import {connect} from 'react-redux';



class BookDetail extends Component{
	render(){
		if (!this.props.book){
			return <div>Please Choose A Book Dude!</div>
		}
		return(
			<div>
         <h3>Details of Book</h3>
         <div>Title: {this.props.book.title}</div>
         <div>Pages: {this.props.book.pages}</div>
     </div>
		);
	}
}

//global props (state) is coming from here after re-render!!!!
//then made available inside this container as book so
//state = this.props.book =  {title:Harry Potter, pages:100} 
function mapStateToProps(state){
 return{  
 	book: state.activeBook
 }
}



//this is the glue that connects react and redux
export default connect(mapStateToProps)(BookDetail);
