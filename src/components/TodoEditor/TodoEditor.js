import classes from './TodoEditor.module.css'
import {motion} from "framer-motion";
import {useState, useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import TodoEditorButtons from "../TodoEditorButtons/TodoEditorButtons";

const TodoEditor = () => {
  const editorVariants = {
    initial: {
      x: "100vw"
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5
      }
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "backIn",
        duration: 0.5,
      }
    }
  }
  const params = useParams()
  const textareaRef = useRef(null)
  const [activeTodo, setActiveTodo] = useState({})

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"))
    const todoWithCorrectId = todosFromLocalStorage.find(todo => todo.id === parseInt(params.id))

    setActiveTodo(todoWithCorrectId)
    textareaRef.current.value = todoWithCorrectId.text
  }, [])

  const updateActiveTodo = () => {
    setActiveTodo(prevTodo => ({
      ...prevTodo,
      text: textareaRef.current.value
    }))
  }

  const saveTodo = () => {
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos = todos.map(todo => (
      todo.id === activeTodo.id ? activeTodo : todo
    ))

    localStorage.setItem("todos", JSON.stringify(todos))
  }

  return (
    <motion.div
      className={classes.TodoEditor}
      variants={editorVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <h2 className={classes.TodoEditorTitle}>Todo editor</h2>
      <form className={classes.TodoEditorForm}>
        <textarea
          ref={textareaRef}
          className={classes.TodoEditorTextarea}
          onChange={updateActiveTodo}
          placeholder={"Other task..."}
        />
        <TodoEditorButtons saveTodo={saveTodo}/>
      </form>
    </motion.div>
  )
}

export default TodoEditor