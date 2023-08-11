import React from "react";

const MainNavigation = props => (
  <header className="main-navigation">
    <nav>
          <div>{props.cartItemNumber}</div>
    </nav>
  </header>
);

export default MainNavigation;