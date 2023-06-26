import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';
import { useContext } from "react";
import FavoriteContext from "../../store/favorites-cotext";

function MainNavigation() {
  const favoritesCtx = useContext(FavoriteContext);
  return (
    <header className={classes.header}> 
      <div className={classes.logo}>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>All meatups</Link>
          </li>
          <li>
            <Link to={'/new-meetup'}>New meetup</Link>
          </li>
          <li>
            <Link to={'/favorites'}>
              Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
