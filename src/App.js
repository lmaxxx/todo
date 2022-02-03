import classes from './App.module.css';
import Todo from './components/Todo/Todo'
import {Routes, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import TodoEditor from "./components/TodoEditor/TodoEditor";

function App() {
  const location = useLocation()

  return (
    <div className={classes.App}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path={"/"} exact element={<Todo/>}/>
          <Route path={"/:id"} exact element={<TodoEditor/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
