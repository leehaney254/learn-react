import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (<header className={classes.header}>
    <nav>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? `${classes.active}` : '')} to="/welcome">Welcome</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? `${classes.active}` : '')} to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  </header >)
}

export default MainHeader;