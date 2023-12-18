import React from "react";
import Image from "next/image";

export default function Definition() {
  return (
    <div className="w-full m-auto px-[24px]">
      <div className="w-full border-b border-neutral-100 md:py-[70px]  sm:py-[50px] py-[50px]">
        <p className="display1">Цахим товхимлууд</p>
        <div className="flex">
          <span className="metadata">Starting point of </span>
          <span className="tag"> &nbsp;more </span>
          <Image
            width={12}
            height={12}
            src="./images/sys_images/orange_dot.svg"
            alt=""
            className="mt-[0px] ml-[7px] mb-[8px]"
          />
        </div>
      </div>
    </div>
  );
}
