import React from 'react'
import { connect } from 'react-redux'

import { deleteItem } from './../../Redux/ToDo/action'

function Todo({ todos, deleteItem }) {
  const todoList = todos.length ? (
    todos.map(todo => (
      <div className="collection-item" key={todo.id}>
        <div className="content">{todo.content}</div>
        <button onClick={() => deleteItem(todo.id)}>Delete</button>
      </div>
    ))
  ) : (
    <p className="center">You don't have any Todo</p>
  )

  return (
    <div className="todo collection">
      {todoList}
    </div>
  )

}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem : key => dispatch(deleteItem(key))
  }
}

export default connect(null, mapDispatchToProps)(Todo)