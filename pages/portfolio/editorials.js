import Head from "next/head";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/Gallery";
import { editoriallData } from "../../data/editorialData";

export default function Editorials() {
    return (
        <div>
            <Head>
                <title>CB Photography | Editorials</title>
            </Head>

            <Navbar />           

            <Gallery title="Editorials" data={editoriallData} />

            <Footer />
        </div>
    );
}
