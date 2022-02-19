import React from 'react'
import './SeasonMenu.css';
import coffee from './coffee.png';
import champagne from './champagne.png';
import juice from './juice.png';

function SeasonMenu() {
  return (
      <>
          <div className="SeasonMenu">
              <div className="halfCircle" />
              <img src={coffee} alt='img' />
              <img src={champagne} alt='img' />
              <img src={juice} alt='img' />
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