import classes from './TodoItem.module.css'
import {motion} from "framer-motion";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import IconButton from "../IconButton/IconButton";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

const TodoItem = ({todo, removeTodo}) => {
  const itemVariants = {
    initial: {
      x: "-100vw",
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5
      }
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: {
        ease: "backIn",
        duration: 0.5,
      }
    },
  }

  return (
    <motion.li
      className={classes.TodoItem}
      key={todo.id}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={itemVariants}
    >
      <p className={classes.TodoItemText}>{todo.text}</p>
      <ButtonGroup direction={'row'}>
        <Link to={`/${todo.id}`}><IconButton color={"#52c41a"} icon={<EditOutlined />}/></Link>
        <IconButton icon={<DeleteOutlined />} color={"#f5222d"} onClick={removeTodo}/>
      </ButtonGroup>
    </motion.li>
  )
}

export default TodoItem