import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ErxesImageUrl } from "@/utils";

type Props = {
  fdata: any;
};

export default function CardsLarge(props: Props) {
  const { fdata } = props;
  return (
    <div className="w-full">
      <div className="w-full p-[24px] bg-neutral-50 rounded-2xl grid md:grid-cols-2 sm:grid-cols-1 gap-[24px]">
        {/* ------------------------------------------------------------------------------------------------------------------ */}
        {fdata?.map((element: any, index: number) => (
          <div className="w-full flex" key={index}>
            <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px]">
              <Image
                src={
                  element.image !== null
                    ? ErxesImageUrl + element.image.url
                    : "./images/sys_images/default.svg"
                }
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: 85,
                  borderRadius: 10,
                }}
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="w-full">
              <p className="text-neutral-300 text-[10px] uppercase font-black leading-4">
                {/* Ер нь? */}#{index + 1}
              </p>
              <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1 ">
                {element.title}
              </p>
              <div className="text-neutral-600 caption mb-1">
                <div
                  className="text-gray-soft mt-3 line-clamp-2 text-[16px]"
                  dangerouslySetInnerHTML={{
                    __html: element.content,
                  }}
                />
                <Link
                  href={"/newsletter-detail/" + element._id}
                  className="text-orange-500 ui1_lower"
                >
                  цааш унших
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* ------------------------------------------------------------------------------------------------------------------ */}
      </div>
    </div>
  );
}
