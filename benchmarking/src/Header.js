// import "./logo.png";
import { MdPerson } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import './Header.css';

function Header() {
  return (
      <>
          {/* <img src="logo.png" alt="로고 첨부" /> */}
          <div>
              <icons className="icons">
                  <MdPerson />
                  <ImLocation />
                  <FaBars />
              </icons>
          </div>

          <div>
              <ul className="menu">
                  <li>COFFEE</li>
                  <li>MENU</li>
                  <li>STORE</li>
                  <li>RESPONSIBILTY</li>
                  <li>STARBUCS REWARDS</li>
                  <li>WHAT'S NEW</li>
              </ul>
          </div>
      </>
  );
}

export default Header;