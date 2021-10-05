import Head from "next/head";

import ContactForm from "../components/form/ContactForm";
import ContactInfo from "../components/form/ContactInfo";
import Hero from "../components/Hero";
import ContactHeroImage from "../public/images/landscapes/group-on-bench-looking-at-horizon.jpg";

import styles from "../styles/Contact.module.css";

function Contact() {
    return (
        <>
            <Head>
                <title>CB Photography | Contact</title>
            </Head>
            <Hero
                image={ContactHeroImage}
                alt="Ocean City, NJ Boardwalk"
                position="50% 30%"
            />
            <div className="container">
                <div className={styles.contact_container}>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </>
    );
}

export default Contact;
