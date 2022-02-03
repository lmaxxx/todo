import classes from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem";
import {AnimatePresence} from 'framer-motion'
const TodoList = ({todos, removeTodo}) => {
  const callbackRemoveTodo = (index) => {
    return () => removeTodo(index)
  }

  return (
    <ul className={classes.TodoList}>
      <AnimatePresence>
      {
        todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={callbackRemoveTodo(index)}
          />
        ))
      }
      </AnimatePresence>
    </ul>
  )
}

export default TodoList