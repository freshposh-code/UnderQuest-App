import React from "react";
import { Ai1 } from "../assets";
import styles from "../Style";

const HeroSection = () => {
  return (
    <div  id="Aboutus"
      className={`${styles.paddingX} ${styles.paddingY} text-white flex md:flex-row flex-col mt-[4.5rem]`}
    >
      <div>
        <h1 className={`${styles.heading2}`}>
          Let's explore your own{" "}
          <span className="text-red-500 xs:text-6xl text-4xl font-extrabold">
            metaverse
          </span>{" "}
          world.
        </h1>
        <p className={`${styles.paragraph}`}>
          The certification aims to provide a deeper understanding of the
          Metaverse <br className="sm:flex hidden" /> and offer you a glimpse of
          the emerging future of the Web and the way we will
          <br className="sm:flex hidden " /> interact with it. Overall, you will
          gain insights and following key points
        </p>
        <div className="flex xs:flex-row flex-col gap-8 mt-6">
          <a target="__blank" href="https://madmetaverse.com/">
            <button className="explore p-2 rounded-md text-[#000] font-extrabold xm:text-[16px] text[9px] w-[100%]">
              Explore the Metaverse
            </button>
          </a>
          <a
            target="__blank"
            href="https://www.blockchain-council.org/certifications/certified-metaverse-expert/?utm_source=Google_Ads&utm_medium=GooglePPC&utm_campaign=3_BCCMetaverse&gad=1&gclid=Cj0KCQjw98ujBhCgARIsAD7QeAhBjUh61_-uNVZacwubVLNQHR2O_gsuk5u88fRVa5q-o9RpJCexWfkaAh-oEALw_wcB"
          >
            <button className="items-center border border-[#a8a8a8] p-2 rounded-md text-[#fff] font-extrabold w-[100%]">
              <div className="flex items-center gap-8 justify-center">
                <ion-icon
                  name="play"
                  style={{
                    border: "1px solid white",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                ></ion-icon>
                learn more
                <ion-icon name="arrow-dropright"></ion-icon>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="mc sm:mt-4 mt-10 rounded-br-[22%]">
        <img
          src={Ai1}
          alt="Ai1"
          className="imagebr rounded-tl-3xl relative sm:bottom-[15px] bottom-[19px] sm:right-[17px] right-[5px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
