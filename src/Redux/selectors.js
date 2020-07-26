import { createSelector } from 'reselect'

const todos = state => state.Todo.todos
const counter = state => state.Todo.counter


export const todoSelector = createSelector(
  todos,
  todos => todos
)

export const counterSelector = createSelector(
  counter,
  counter => counter
)