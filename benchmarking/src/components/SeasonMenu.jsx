import React from 'react'
import './SeasonMenu.css';
import styled from 'styled-components';

const halfCircle = styled.div`
    width: 300px;
    height: 180px;
    background: linear-gradient(rgb(153, 252, 255), rgb(252, 197, 206));
    border-radius: 150px 150px 0px 0px;
    position: relative;
    right: -37.5%;
    top: 30%;
    justify-content: center;
`


function SeasonMenu() {


  return (
      <>
          <div className="SeasonMenu">
              <halfCircle />
              <div className="beverage">
                  <img src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_latte.png" alt="img" />
                  <img src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_drink_2.png" alt="img" />
                  <img src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_frappuccino_0203.png" alt="img" />
              </div>
          </div>
      </>
  );
}

export default SeasonMenu;