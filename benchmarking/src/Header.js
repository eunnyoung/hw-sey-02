// import { MdPerson } from "react-icons/md";
// import { ImLocation } from "react-icons/im";
// import { FaBars } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import './Header.css';
import logo from "./logo.png";

function Header() {
  return (
      <>
          <div className="Header">
                  <img src={logo} alt="logo" />
              <div>
                  <ul className="nav01">
                      <li>Sign in</li>
                      <hr />
                      <li>My Starbucks</li>
                      <hr />
                      <li>Customer Service & Ideas</li>
                      <hr />
                      <li>Find a Store</li>
                      <button>
                          <GiMagnifyingGlass />
                      </button>
                  </ul>
              </div>
              <div>
                  <ul className="nav02">
                      <li>COFFEE</li>
                      <li>MENU</li>
                      <li>STORE</li>
                      <li>RESPONSIBILTY</li>
                      <li>STARBUCKS REWARDS</li>
                      <li>WHAT'S NEW</li>
                  </ul>
              </div>
          </div>
      </>
  );
}

export default Header;