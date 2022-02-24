import styled, { css } from 'styled-components';

function SeasonMenu() {
    return (
        <>
            <Wrap>
                <Slogan src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_slogan.png" />
                <Lookup>
                    <A>자세히 보기</A>
                </Lookup>
                <HalfCircle />
                <div className="menuWrap">
                    <Latte src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_latte.png" alt="img" />
                    <StrawberryDrink src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_drink_2.png" alt="img" />
                    <StrawberryFrap src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_frappuccino_0203.png" alt="img" />
                </div>
            </Wrap>
        </>
    );
}

export default SeasonMenu;

const Wrap = styled.div`
    background: linear-gradient( rgb(195, 253, 255) 60%, rgb(255, 211, 218) 40%);
    height: 600px;
    padding-inline: 20%;
`;

const Lookup = styled.div`
    margin-top: 40px;
    margin-left: 100px;
    width: fit-content;
`;

const A = styled.div`
    z-index: 1;
    padding: 10px;
    padding-inline: 30px;
    border: solid;
    border-radius: 5px;
    border-color: rgb(255, 122, 144);
    color:rgb(255, 86, 114);
`;

const Slogan = styled.img`
    margin-top: 70px;
    margin-left: 0;
`;

const HalfCircle = styled.div`
    width: 500px;
    height: 220px;
    background: linear-gradient(rgb(153, 252, 255), rgb(252, 197, 206));
    border-radius: 250px 250px 0px 0px;
    position: relative;
    right: -45%;
    top: -29%;
    justify-content: center;
`;

const Latte = styled.img`
    position: relative;
    margin-top: -26%;
    margin-left: 15%;
    z-index: 2;
`;

const StrawberryDrink = styled.img`
    position: relative;
    padding: 0;
    top: -80px;
    margin-top: -100%;
    margin-left: 41%;
    z-index: 2;
`;

const StrawberryFrap = styled.img`
    position: relative;
    padding-bottom: 2%;
    margin-top: -100%;
    margin-left: 76%;
    z-index: 2;
`;