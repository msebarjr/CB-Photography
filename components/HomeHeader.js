import styles from "../styles/HomeHeader.module.css";

function HomeHeader(props) {
    return (
        <section className={styles.home_hero}>
            {props.images.map((image, index) => {
                return (
                    <div className={styles.img_container} key={index}>
                        <img src={image.mobile} alt={image.alt} />
                    </div>
                );
            })}

            <div className={styles.overlap}>
                <h1>CB Photography</h1>
            </div>
        </section>
    );
}

export default HomeHeader;
