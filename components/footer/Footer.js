import styles from "../../styles/Footer.module.css";

import Container from "../helper/Container";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import FooterLocations from "./FooterLocations";
import FooterSocial from "./FooterSocial";

function Footer() {
    const cities = [
        "Coral Springs",
        "Parkland",
        "Margate",
        "Tamarac",
        "Fort Lauderdale",
        "Boca Raton",
        "Delray",
        "Boynton",
        "Lake Worth",
        "Wellington",
        "Royal Palm Beach",
        "West Palm Beach",
    ];

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_site_info}>
                    <FooterLinks />
                    <FooterInfo />
                    <FooterSocial />
                </div>
                <ul className={styles.footer_locations}>
                    {cities.map((city, index) => {
                        return <FooterLocations key={index} city={city} />;
                    })}
                </ul>
                <ul className={styles.footer_policies}>
                    <li>@copyright 2021</li>
                    <li>Privacy & Terms</li>
                    <li>Created by Michael Sebar Jr</li>
                </ul>
            </Container>
        </footer>
    );
}

export default Footer;
