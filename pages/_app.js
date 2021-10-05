import MainContainer from "../components/helper/MainContainer";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <MainContainer>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </MainContainer>
    );
}

export default MyApp;
