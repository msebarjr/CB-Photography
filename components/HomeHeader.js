import { useState } from "react";
import Image from "next/image";

import styles from "../styles/HomeHeader.module.css";

function HomeHeader(props) {
    const [isImageReady, setIsImageReady] = useState(false);

    // const onLoadCallBack = (e) => {
    //     setIsImageReady(true);
    //     typeof onLoad === "function" && onLoad(e);
    // };
    return (
        <section className={styles.home_hero}>
            {/* {props.images.map((image, index) => {
                return (
                    <div className={styles.home_image} key={index}>
                        {/* <Image
                            src={image.image}
                            alt={image.alt}
                            width="450"
                            height="400"
                            objectFit="cover"
                            objectPosition={image.position}
                            onLoad={(event) => {
                                const target = event.target;

                                // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
                                if (
                                    target.src.indexOf(
                                        "data:image/gif;base64"
                                    ) < 0
                                ) {
                                    setIsImageReady(true);
                                }
                            }}
                        /> */}
            {/* <img src={image.image} alt={image.alt} />
                    </div> */}
            {/* );
            })} */}{" "}
            {/* */}
            <div className={styles.img_container}>
                <img
                    src="/images/editorials/ayindei.jpg"
                    // alt={image.alt}
                    className={styles.img1}
                />
            </div>
            <div className={styles.img_container}>
                <img
                    src="/images/editorials/noah-plitt.jpg"
                    // alt={image.alt}
                    className={styles.img2}
                />
            </div>
            <div className={styles.img_container}>
                <img
                    src="/images/editorials/sabastiana.jpg"
                    // alt={image.alt}
                    className={styles.img3}
                />
            </div>
            <div className={styles.img_container}>
                <img
                    src="/images/headshots/amanda-caceres.jpg"
                    // alt={image.alt}
                    className={styles.img4}
                />
            </div>
            <div className={styles.img_container}>
                <img
                    src="/images/headshots/exotic.jpg"
                    // alt={image.alt}
                    className={styles.img5}
                />
            </div>
            <div className={styles.img_container}>
                <img
                    src="/images/editorials/ariana2.jpg"
                    // alt={image.alt}
                    className={styles.img6}
                />
            </div>
            <div className={styles.img_container}>
                <img
                    src="/images/headshots/kid-smiling.jpg"
                    // alt={image.alt}
                    className={styles.img7}
                />
            </div>
            <div className={styles.img_container}>
                <img
                    src="/images/headshot.jpg"
                    // alt={image.alt}
                    className={styles.img8}
                />
            </div>
            <div className={styles.overlap}>
                <h1>CB Photography</h1>
            </div>
        </section>
    );
}

export default HomeHeader;
