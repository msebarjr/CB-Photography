import Head from "next/head";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
// import Gallery from "../../components/Gallery";
// import styles from "../../styles/Portfilio.module.css";

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>CB Photography | Portfolio</title>
            </Head>

            <Navbar />

            {/* <Gallery /> */}

            <Footer />
        </>
    );
}
