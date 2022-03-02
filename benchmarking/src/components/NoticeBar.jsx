import styled, { css } from 'styled-components';
import { BsPlusCircle } from "react-icons/bs"

function NoticeBar() {
  return (
      <MidBar>
          <Notice>
              <Text>
                  <A11>공지사항</A11>
                  <A12>시스템 개선 및 점검 안내</A12>
              </Text>
              <Plus><BsPlusCircle size="36px"/></Plus>
          </Notice>
          <Promotion>
              <A2>스타벅스 프로모션</A2>
              <Img src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png" alt="img" />
          </Promotion>
      </MidBar>
  );
}

export default NoticeBar;

const MidBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 5em;
`;

const Notice = styled.div`
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    margin-left: 40%;
`;

const A11 = styled.a`
  margin-left: 10px;
  font-weight: bold;
`;

const A12 = styled.a`
  margin-left: 10px;
  &: hover {
    text-decoration: underline;
  }
`;

const Plus = styled.span`
  margin-left: 25%;
`;

const Promotion = styled.div`
  background-color: rgb(255, 248, 232);
  color: rgb(61, 61, 61);
  display: flex;
  align-items: center;
`;

const A2 = styled.a`
  margin-left: 20%;
  font-weight: bold;
`;

const Img = styled.img`
  margin-left: 10%;
`;