import classes from './TodoEditorButtons.module.css'
import {Link} from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const TodoEditorButtons = ({saveTodo}) => {
  return (
    <ButtonGroup className={classes.TodoEditorButtons} direction={'row'}>
      <Link to={"/"}>
        <IconButton
          icon={<CloseOutlined />}
          color={"#f5222d"}
          className={classes.TodoEditorButtonsIcon}
        />
      </Link>
      <Link to={"/"}>
        <IconButton
          color={"#52c41a"}
          icon={<CheckOutlined />}
          className={classes.TodoEditorButtonsIcon}
          onClick={saveTodo}
        />
      </Link>
    </ButtonGroup>
  )
}

export default TodoEditorButtons