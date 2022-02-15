// import "./logo.png";
import { MdPerson } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import './Header.css';

function Header() {
  return (
      <>
          {/* <img src="logo.png" alt="로고 첨부" /> */}
          <icons className="icons">
              <MdPerson />
              <ImLocation />
              <FaBars />
          </icons>
      </>
  );
}

export default Header;