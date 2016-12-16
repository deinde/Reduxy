//Reducers typically accept two arguments state and action
//state argument here is not!!! aplication state!!!not! It is the state of only
//reducer it is responsible for!!! A little confusing but that is what it
//is. So it is only the state of active book!
//which means the individual book that was passed in and matched
//by the switch statement. ie Harry Potter only, 
//not Harry Potter, Eloquent, Javascript : The Good Parts', Dark Tower etc
//Reducers is just checking to match the correct individual case.

export default function(state=null, action){
 switch(action.type){
 case 'BOOK_SELECTED':
  return action.payload ;
 }
  return state
}