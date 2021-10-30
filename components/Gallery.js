import { useState } from "react";

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
            <div className={styles.container}>
                {props.data.map((item, index) => {
                    return (
                        <div className={styles.gallery} key={index}>
                            <picture>
                                <source
                                    media="(min-width: 800px)"
                                    srcSet={item.image}
                                />
                                <img
                                    src={item.mobile}
                                    alt={item.alt}
                                    onClick={() =>
                                        openLightboxOnSlide(index + 1)
                                    }
                                />
                            </picture>
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
