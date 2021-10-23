import Head from "next/head";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/Gallery";
import { portraitData } from "../../data/portraitData";

export default function Portraits() {
    return (
        <div>
            <Head>
                <title>CB Photography | Portraits</title>
            </Head>

            <Navbar />

            <Gallery title="Portraits" data={portraitData} />

            <Footer />
        </div>
    );
}
