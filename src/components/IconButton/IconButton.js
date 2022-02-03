import classes from "./IconButton.module.css";

const IconButton = ({icon, className, onClick, color}) => {
  return (
    <button
      className={[classes.IconButton, className].join(" ")}
      style={{color}}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default IconButton