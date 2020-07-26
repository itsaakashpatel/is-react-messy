
//ACTION TYPE
import { actionTypes } from './action'
import randomstring from 'randomstring'

let todos = []
for (let index = 0; index < 10; index++) {
  todos.push({
    id : randomstring.generate({
      length: 11,
      charset: 'numeric'
    }),
    content : randomstring.generate(32)
  })
}

//INIT STATE
const initState = {
  todos:todos,
  counter : 0
}

//REDUCER
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        todos : [...state.todos, action.item]
      }  
    case actionTypes.DELETE:
        return {
          ...state,
          todos : state.todos.filter(item => action.key !== item.id)
        }
    case actionTypes.INCREASE_COUNTER:
      return {
        ...state,
        counter : state.counter + 1
      }
    default:
      return state;
  }
}

export default reducer