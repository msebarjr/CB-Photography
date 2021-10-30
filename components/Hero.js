
import styles from "../styles/Hero.module.css";

function Hero(props) {
    return (
        <div className={styles.hero_container}>
            <picture>
                <source media="(min-width: 1025px)" srcSet={props.image} />
                <img src={props.mobile} alt={props.alt} />
            </picture>
        </div>
    );
}

export default Hero;
