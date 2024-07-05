//Es como un contrato
// interface Todo {
//     id: string
//     title: TodoTitle
//     completed: boolean
// }

import { TODO_FILTERS } from "./const"

// type TodoTitle = string

// type ListOfTodos = Todo[]

export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>


export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]