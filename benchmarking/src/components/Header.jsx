import styled, { css } from 'styled-components';

function Header() {
  return (
      <>
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
                      <Button>
                          <img src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" alt="magnify" />
                      </Button>
                  </Nav01>
                  <Nav02>
                      <Li02>
                          COFFEE
                          <Ul>
                              <li>
                                  <A href="#">커피</A>
                              </li>
                              <li>
                                  <A href="#">커피 이야기</A>
                              </li>
                              <li>
                                  <A href="#">나와 어울리는 커피</A>
                              </li>
                          </Ul>
                      </Li02>
                      <Li02>MENU</Li02>
                      <Li02>STORE</Li02>
                      <Li02>RESPONSIBILTY</Li02>
                      <Li02>STARBUCKS REWARDS</Li02>
                      <Li02>WHAT'S NEW</Li02>
                  </Nav02>
              </div>
          </Head>
      </>
  );
}

export default Header;

const Head = styled.div`
    background-color: rgb(255, 248, 232);
    justify-content: flex-end;
    padding-inline: 20%;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Logo = styled.img`
    width: 60px;
`;

const Nav01 = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin:0;
    margin-inline: 5%;
`;

const Nav02 = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin:0;
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
    float:left;
    font-size: 90%;
    margin: 0;
    padding: 20px;
    margin-top: 10px;
    padding-top: 10px;
    &:hover {
        color: #00a000;
        text-decoration: underline;
        background-color: black;
    }
`;

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

const Button = styled.button`
    margin: 5px;
`;