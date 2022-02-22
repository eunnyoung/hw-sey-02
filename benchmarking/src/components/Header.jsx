import { GiMagnifyingGlass } from "react-icons/gi";
import './Header.css';
import styled from "styled-components";

function Header() {
  return (
      <>
          <div className="Header">
              <div className="img">
                  <img src="https://www.starbucks.co.kr/common/img/common/logo.png" alt="logo" />
              </div>
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
                          <img src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" alt="magnify"/>
                      </button>
                  </ul>
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