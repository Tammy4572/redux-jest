// Write a unit test for all 3 action types that can be passed to the reducer within src/reducer.test.js.
//   CREATE_TODO
//   TOGGLE_TODO
//   FILTER_TODOS

import reducer from './reducer';
import { createTodo } from './actions';
import { toggleTodo } from './actions';
import { filterTodos }from './actions';

describe("CREATE_TODO", function() {
     test("creates a new todo", function() {
          const initialState = { todos: [], nextId: 1 }
          const state = reducer(initialState, createTodo("Test"));
          expect(state.todos).toHaveLength(1);
          expect(state.todos[0]).toEqual({id:1, done: false, text: "Test"});
     })

     test("updates nextId", function () {
          const initialState = { todos: [], nextId: 1 }
          const state = reducer(initialState, createTodo("Test"));
          expect(state.nextId).toEqual(2);
     })
})

describe("TOGGLE_TODO", function() {
     test("it toggles successfully", function() {
          console.log({toggleTodo})
     })
})

describe("FILTER_TODOS", function(){
     test("it filters successfully", function() {
          console.log({toggleTodo})
     })
})
