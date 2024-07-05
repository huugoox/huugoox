import React, { useState } from 'react';
import { Todos } from './components/Todos';
import { FilterValue, type TodoId, type Todo as TodoType, type Todo as TodoTitle} from './types';
import { TODO_FILTERS } from './const';
import { Footer } from './components/Footer';
import { Header } from './components/Header';



const mockTodos = [
  {
    id: '1',
    title: 'Anar a dinar',
    completed: true,
  }, 
  {
    id: '2',
    title: 'Dinar',
    completed: true,
  },
  {
    id: '3',
    title: 'Sortir de festa',
    completed: true,
  },
  
]
 
const App = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  } 
  
  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }


  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }

    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }

    return todo
  })

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.getRandomValues(new Uint32Array(1))[0].toString(),
      completed: false
    }
    
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }


  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleteTodo={handleComplete} 
        onRemoveTodo={handleRemove}
        todos={filteredTodos} 
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={handleClearCompleted}
          handleFilterChange={handleFilterChange}
         />
    </div>
  )
}

export default App
