export const actionTypes = {
  ADD : 'ADD',
  DELETE : 'DELETE',
  INCREASE_COUNTER : 'INCREASE_COUNTER'
} 
//ACTION CREATORS
export const addItem = (item) => {
  return {
    type : 'ADD',
    item
  }
}

export const deleteItem = (key) => {
  return {
    type : 'DELETE',
    key
  }
}

export const increaseCounter = () => {
  return {
    type : 'INCREASE_COUNTER'
  }
}