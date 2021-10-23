import Link from "next/link";
import Image from "next/image";
import Carousel from "react-elastic-carousel";

import styles from "../styles/HomePortfolio.module.css";

function HomePortfolio(props) {
    const breakPoints = [
        { width: 1, itemsToShow: 1, itemPadding: [0] },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];
    return (
        <section className={styles.portfolio_container}>
            <h1>Portfolio</h1>

            <Carousel
                itemsToScroll={1}
                breakPoints={breakPoints}
                itemPadding={[30]}
                enableMouseSwipe={false}
            >
                {props.images.map((image, index) => {
                    return (
                        <div className={styles.slide} key={index}>
                            <Link href={"/portfolio/" + `${image.category}`}>
                                <a>
                                    <Image
                                        src={image.image}
                                        alt={image.alt}
                                        width={500}
                                        height={600}
                                        objectFit="cover"
                                        position={image.position}
                                        draggable={false}
                                    />
                                </a>
                            </Link>
                            <div className={styles.slide_title}>
                                <p>{image.category}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
            <Link href="/portfolio">
                <a>
                    <div className={styles.link}>
                        <p>View All</p>
                        <p>-></p>
                    </div>
                </a>
            </Link>
        </section>
    );
}

export default HomePortfolio;
