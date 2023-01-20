import  classes from './MainHeader.module.css';
import { Link, NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* <Link to='/welcome'>welcome</Link> */}
            <NavLink activeClassName={classes.active} to='/welcome'>welcome</NavLink>
          </li>
          <li>
            {/* <Link to='/products'>products</Link> */}
            <NavLink activeClassName={classes.active} to='/products'>products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default MainHeader;