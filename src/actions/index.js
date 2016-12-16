export function selectBook(book){
  // selectBook is an action creator.It needs to return an action!!!!!!
  //it returns an object that must!!!! have a 'type' property
  return {
  	type:'BOOK_SELECT',
  	payload:book
  }	

}

