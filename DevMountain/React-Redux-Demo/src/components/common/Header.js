/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink className="header-logo" to="/" activeClassName="active">E</IndexLink>
      <div className="header-icon-holder">
        <a className="nav-icon first-icon" href=""><span className="glyphicon glyphicon-home"></span></a>
        <a className="nav-icon" href=""><span className="glyphicon glyphicon-heart"></span></a>
        <a className="nav-icon" href=""><img className="nav-img" src="https://www.etsy.com/images/avatars/default_shop_icon_75x75.png" alt=""/></a>
        <a className="nav-icon" href=""><img className="nav-img circle" src="https://www.etsy.com/images/avatars/default_avatar_75x75.png" alt=""/></a>
        <a className="nav-icon" href=""><span className="glyphicon glyphicon-shopping-cart"></span></a>
      </div>
    </nav>
  );
};

export default Header;
