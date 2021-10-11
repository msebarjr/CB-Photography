import Head from "next/head";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>CB Photography | Home</title>
            </Head>

            <Navbar />
            <h1>Homepage</h1>
            <Footer />
        </>
    );
}
