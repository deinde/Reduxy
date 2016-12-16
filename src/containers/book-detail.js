import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreator} from 'redux';





 class BookDetail extends Component{
	render(){
		if(!this.props.book){
			return <div>Please Chose A Book Dude!</div>
		}
		return(
			<div>
         <h1>Details of Book</h1>
         <div>{this.props.book.title}</div>
     </div>
		);
	}
}


function mapStateToProps(state){
 return{
 	book:state.activeBook
 }
}

// function mapDispatchToProps(){
//  return bindActionCreator()
// }




export default connect(mapStateToProps)(BookDetail);
