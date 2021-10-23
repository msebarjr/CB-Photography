import { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

import styles from "../styles/Gallery.module.css";

function Gallery(props) {
    // const [modal, setModal] = useState(false);
    // const [tempImgSrc, setTempImgSrc] = useState();

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

    // const [toggler, setToggler] = useState(false);

    // const handleFSLightboxToggle = (index) => {
    //     const removedImage = images.splice(index, 1);
    //     updatedImageOrder = [removedImage, ...images];
    //     setToggler(!toggler);
    // };

    // const getImageHandler = (image, index) => {
    //     setTempImgSrc(image);
    //     setModal(true);
    // };

    // const prevImgHandler = () => {};

    // const nextImgHandler = () => {
    //     setImgIndex((imgIndex % props.data.length) + 1);
    //     console.log(imgIndex);
    //     setTempImgSrc(props.data[imgIndex]);
    // };

    return (
        <>
            {/* {modal && (
                <>
                    <div
                        className={
                            modal
                                ? `${styles.modal} ${styles.open}`
                                : styles.modal
                        }
                    >
                        <div className={styles.gallery_count}>
                            {imgIndex + 1} / {props.data.length}
                        </div>

                        <button
                            className={styles.prev_button}
                            onClick={prevImgHandler}
                        >
                            prev
                        </button>

                        <div className={styles.modal_img}>
                            <Image
                                src={tempImgSrc.image}
                                alt={tempImgSrc.alt}
                                width={
                                    tempImgSrc.fwidth ? tempImgSrc.fwidth : 1300
                                }
                                height={900}
                                objectFit="cover"
                                objectPosition={tempImgSrc.position}
                            />
                        </div>

                        <IoCloseOutline onClick={() => setModal(false)} />
                        <button
                            className={styles.next_button}
                            onClick={nextImgHandler}
                        >
                            next
                        </button>
                    </div>
                </>
            )} */}

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
