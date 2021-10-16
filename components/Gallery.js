import { useState } from "react";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import styles from "../styles/Gallery.module.css";

function Gallery(props) {
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState();

    const getImageHandler = (image) => {
        setTempImgSrc(image);
        setModal(true);
    };

    return (
        <>
            {modal && (
                <>
                    <div
                        className={
                            modal
                                ? `${styles.modal} ${styles.open}`
                                : styles.modal
                        }
                    >
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
                    </div>
                </>
            )}

            <h1 className={styles.title}>{props.title}</h1>

            <div className={styles.gallery}>
                {props.data.map((item, index) => {
                    return (
                        <div
                            className={styles.pics}
                            key={index}
                            onClick={() => getImageHandler(item)}
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                                objectFit="cover"
                                priority={true}
                                objectPosition={item.position}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Gallery;
