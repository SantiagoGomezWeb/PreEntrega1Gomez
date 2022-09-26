import { useEffect, useState } from "react";
import { getTopNav } from "./../data/navbars";
import CartWidget from './CartWidget'

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse] = useState("nav__menu");
  

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__brand">
            Autocor
          </a>
          <ul className={collapse}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a href={item.href} className="nav__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div><CartWidget /></div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
