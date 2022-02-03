import classes from './ButtonGroup.module.css'

const ButtonGroup = ({children, direction, styles, className}) => {
  const style = {
    flexDirection: direction,
    ...styles
  }

  return (
    <div
      style={style}
      className={[classes.ButtonGroup, className].join(" ")}
    >
      {children}
    </div>
  )
}

export default ButtonGroup