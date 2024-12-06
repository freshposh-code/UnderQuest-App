import React from "react";
import { usage } from "../constant/data";
import styles from "../Style";

const Usage = () => {
  return (
    <>
      <section className={`${styles.paddingY} ${styles.paddingX}`}>
        <div>
          <h1 className={`${styles.heading2} text-center`}>
            find everything used in{" "}
            <span className="text-red-500 sm:text-6xl text-2xl font-extrabold">
              metaverse
            </span>
          </h1>
        </div>
        <div className="mt-12 bg-slate-800/20 sm:p-[7rem] p-[0.5rem] rounded-xl border-x-[0.1px] border-t-[0.1px] border-[#6a6a6a]">
          <div className="grid sm:grid-cols-4 xm:grid-cols-2 grid-cols-1 justify-center gap-[8rem]">
            {usage.map((element) => (
              <icon className="text-center" key={element}>
                {element.icon}
                {element.names.map((index) => (
                  <div key={index}>
                    <p className="text-[rgb(150,150,150)] md:text-base text-xs">
                      {index.name}
                    </p>
                  </div>
                ))}
              </icon>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Usage;
