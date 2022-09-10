import { React, useState, useEffect } from "react";
import Categories from "../Data/GalleryPhotos";
import video from "../assets/video.mp4";

import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

import FsLightbox from "fslightbox-react";

function Gallery() {
  const [images, setImages] = useState([]);
  const [toggler, setToggler] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const [data, setData] = useState(Categories);
  const [isVideo, setIsVideo] = useState(false);

  const filterResult = (catItem) => {
    const result = Categories.filter((curItem) => {
      return curItem.category === catItem;
    });
    setData(result);
    setIsVideo(false);
  };

  useEffect(() => {
    const newImages = Categories.map((e) => {
      return e.img;
    });
    setImages(newImages);
  }, []);

  return (
    <section id="gallery-mine">
      <div className="sec-title">
        <Reveal triggerOnce keyframes={scrollAnimation.slideInLeft}>
          <h2>Gallery</h2>
        </Reveal>
      </div>

      <div className="gallery-wrapper">
        <div className="top-content">
          <Reveal triggerOnce keyframes={scrollAnimation.flipInX}>
            <h3>Photo Gallery</h3>
          </Reveal>

          <Reveal
            triggerOnce
            cascade
            duration={300}
            keyframes={scrollAnimation.fadeInRight}
          >
            <span
              onClick={() => {
                setData(Categories);
                setIsVideo(false);
              }}
            >
              All Photos
            </span>
            <span onClick={() => filterResult("project")}>Projects</span>
            <span onClick={() => filterResult("product")}>Products</span>
            <div className="divider"></div>
            <span
              onClick={() => {
                setData(Categories);
                setIsVideo(true);
              }}
            >
              Videos
            </span>
          </Reveal>
        </div>

        {!isVideo ? (
          <motion.div layout className="photo-gallery">
            <AnimatePresence>
              {data &&
                data.map((values) => {
                  return (
                    <motion.div
                      layout
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      className="pic"
                      key={values.id}
                    >
                      <img
                        src={values.img}
                        onClick={() => {
                          setToggler(!toggler);
                          setCurrentIndex(values.id - 1);
                        }}
                      />
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="video-holder">
            <div className="vid">
              <video
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                src={video}
                muted={true}
              />
            </div>
          </div>
        )}
      </div>

      <FsLightbox
        toggler={toggler}
        sources={images}
        sourceIndex={currentIndex}
      />
    </section>
  );
}

export default Gallery;
