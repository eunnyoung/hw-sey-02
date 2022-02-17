import "./App.css";
import Header from "./Header";
import SeasonMenu from "./SeasonMenu";
import Rewards from "./Rewards";

function App() {
    return (
        <>
            <head>
                <title>Stars</title>
            </head>
            <body>
                <Header />
                <SeasonMenu />
                <Rewards />
                <footer></footer>
            </body>
        </>
    );
}

export default App;
