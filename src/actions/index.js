export function selectBook(book){
  // selectBook is an action creator.It needs to return an action!!!!!!
  //it returns an object that must!!!! have a 'type' property
  return {
  	//this is an action
  	type:'BOOK_SELECTED',
  	payload:book
  }	

}

