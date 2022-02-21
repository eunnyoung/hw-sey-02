import React from 'react'
import './SeasonMenu.css';

function SeasonMenu() {
  return (
      <>
          <div className="SeasonMenu">
              <div className="halfCircle" />
              <div className="beverage">
                  <img src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_latte.png" alt="img" />
                  <img src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_drink_2.png" alt="img" />
                  <img src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_frappuccino_0203.png" alt="img" />
              </div>

              {/* <div>BRING NEW SPRING</div>
              <div>자세히 보기</div>
              <div>유자차</div>
              <div>딸기 라떼</div>
              <div>레몬 에이드</div> */}
          </div>
      </>
  );
}

export default SeasonMenu;