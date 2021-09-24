import MainContainer from "../components/helper/MainContainer";
import Navbar from "../components/navigation/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <MainContainer>
            <Navbar />
            <Component {...pageProps} />
        </MainContainer>
    );
}

export default MyApp;
