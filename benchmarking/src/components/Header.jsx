import styled, { css } from 'styled-components';

function Header() {
  return (
          <Head>
              <Img>
                  <Logo src="https://www.starbucks.co.kr/common/img/common/logo.png" alt="logo" />
              </Img>
              <div>
                  <Nav01>
                      <Li01>Sign in</Li01>
                      <Hr />
                      <Li01>My Starbucks</Li01>
                      <Hr />
                      <Li01>Customer Service & Ideas</Li01>
                      <Hr />
                      <Li01>Find a Store</Li01>
                      <Btn>
                          <img src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" alt="magnify" />
                      </Btn>
                  </Nav01>
                  <Nav02>
                      <Li02>
                          <LiTitle>COFFEE</LiTitle>
                          <Ul>
                              <A>커피</A>
                              <A>커피 이야기</A>
                              <A href="#">나와 어울리는 커피</A>
                          </Ul>
                      </Li02>
                      <Li02>MENU</Li02>
                      <Li02>STORE</Li02>
                      <Li02>RESPONSIBILTY</Li02>
                      <Li02>STARBUCKS REWARDS</Li02>
                      <Li02>WHAT'S NEW</Li02>
                  </Nav02>
                  <Nav03>
                      <img src="https://www.starbucks.co.kr/common/img/common/icon_user_m.png" alt="img" />
                      <img src="https://www.starbucks.co.kr/common/img/common/icon_spot_m.png" alt="img" />
                      <img src="https://www.starbucks.co.kr/common/img/common/btn_berger_m.png" alt="img" />
                  </Nav03>
              </div>
          </Head>
  );
}

export default Header;

const Head = styled.div`
    background-color: rgb(255, 248, 232);
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding-inline: 20%;
    @media screen and (max-width: 955px) {
        padding: 1%;
    }
`;

const Img = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 60px;
    display: flex;
    align-items: center;
`;

const Nav01 = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin:0;
    margin-inline: 5%;
    @media screen and (max-width: 955px) {
        display: none;
    }
`;

const Nav02 = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin:0;
    @media screen and (max-width: 955px) {
        display: none;
    }
`;

const Li01 = styled.li`
    float:left;
    font-size: 80%;
    margin: 10px;
    margin-top: 13px;
    &:hover {
        text-decoration: underline;
    }
`;

const Li02 = styled.li`
  float: left;
  font-size: 90%;
  margin: 0;
  padding: 20px;
  margin-top: 10px;
  padding-top: 10px;
  :hover {
    div {
      text-decoration: underline;
    }
    color: #00A000;
    background-color: black;
  }
`;

const LiTitle = styled.div``;

const Ul =styled.ul`
    list-style: none;
    display:none;
    ${Li02}:hover & {
        display: block;
    }
`;

const A = styled.li`
    color: white;
    text-decoration: none;
`;

const Hr = styled.hr`
    margin: 10px;
    margin-top: 13px;
`;

const Btn = styled.button`
    margin: 5px;
`;

const Nav03 = styled.div`
    height: 30px;
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 955px) {
        display: none;
    }
`;