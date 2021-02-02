import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import '../css/Menu.css';

function menu() {

    return (
        <Menu>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/pasta">
            Pasta
          </a>
          <a className="menu-item" href="/pizzas">
            Pizzas
          </a>
          <a className="menu-item" href="/burger">
            Burger
          </a>
        </Menu>
      );
    }
}

export default menu;