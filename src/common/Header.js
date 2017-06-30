import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
          <ul>  
            <li>
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
            </li>
            <li>
              <Link to="/game" activeClassName="active">Game</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
          </ul>
        </nav>
    );
};

export default Header;