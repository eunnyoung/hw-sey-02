import Header from "./components/Header";
import SeasonMenu from "./components/SeasonMenu";
import NoticeBar from "./components/NoticeBar";
import Rewards from "./components/Rewards";

function App() {
    return (
        <>
                <Header />
                <SeasonMenu />
                <NoticeBar />
                {/* <Rewards /> */}
                <footer></footer>
        </>
    );
}

export default App;
