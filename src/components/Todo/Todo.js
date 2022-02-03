import classes from "./Todo.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import {useState, useLayoutEffect, useEffect} from 'react'
import {motion} from 'framer-motion'
import Title from "../Title/Title";

const Todo = () => {
  const [todos, setTodos] = useState([])
  const todoVariants = {
    exit: {
      x: "-100vw",
      transition: {
        ease: "backIn",
        duration: 0.5,
      }
    },
    animate: {
      y: 0
    },
    initial: {
      y: -100
    }
  }

  useLayoutEffect(() => {
    const todosFromLocalStorage = localStorage.getItem("todos")
    setTodos(JSON.parse(todosFromLocalStorage))
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (index) => {
    const copyTodos = [...todos]

    copyTodos.splice(index, 1)

    setTodos(copyTodos)
  }

  return (
    <motion.div
      className={classes.Todo}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={todoVariants}
    >
      <Title/>
      <TodoForm addTodo={addTodo}/>
      <TodoList removeTodo={removeTodo} todos={todos}/>
    </motion.div>
  )
}

export default Todo