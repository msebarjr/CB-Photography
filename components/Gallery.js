import { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

import styles from "../styles/Gallery.module.css";

function Gallery(props) {
    const images = props.data.map((image) => image.image);

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    const openLightboxOnSlide = (number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        });
    };

    return (
        <>
            <h1 className={styles.title}>{props.title}</h1>

            <div className={styles.gallery}>
                {props.data.map((item, index) => {
                    return (
                        <div className={styles.pics} key={index}>
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                                objectFit="cover"
                                objectPosition={item.position}
                                onClick={() => openLightboxOnSlide(index + 1)}
                            />
                        </div>
                    );
                })}
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={images}
                slide={lightboxController.slide}
            />
        </>
    );
}

export default Gallery;
