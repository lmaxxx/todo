import classes from './Title.module.css'
import Logo from '../../img/logo.png'

const Title = () => {
  return (
    <div className={classes.Title}>
      <h1 className={classes.TitleText}>lmaxxx</h1>
      <img className={classes.TitleLogo} src={Logo} alt=""/>
    </div>
  )
}

export default Title