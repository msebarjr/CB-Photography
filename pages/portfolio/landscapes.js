import Head from "next/head";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/Gallery";
import { landscapeData } from "../../data/landscapeData";

export default function Landscapes() {
    return (
        <div>
            <Head>
                <title>CB Photography | Landscapes</title>
            </Head>

            <Navbar />

            <Gallery title="Landscapes" data={landscapeData} />

            <Footer />
        </div>
    );
}
