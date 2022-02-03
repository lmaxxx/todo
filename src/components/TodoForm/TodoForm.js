import classes from "./TodoForm.module.css";
import {useRef} from "react";
import {motion} from "framer-motion";

const TodoForm = ({addTodo}) => {
  const inputRef = useRef(null);

  const submit = (e) => {
    e.preventDefault()

    if(!inputRef.current.value.trim()) return

    const newTodo = {
      text: inputRef.current.value,
      completed: false,
      id: Date.now()
    }

    addTodo(newTodo)

    inputRef.current.value = ''
  }

  return (
    <form onSubmit={submit} className={classes.TodoForm}>
      <input
        className={classes.TodoFormInput}
        ref={inputRef}
        type="text"
        placeholder={"Buy the milk..."}
      />
      <motion.button
        className={classes.TodoFormButton}
        type={"submit"}
        whileTap={{ scale: 1.1 }}
      >Add</motion.button>
    </form>
  )
}

export default TodoForm