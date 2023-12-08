import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  fdata: any;
};

export default function CardsLarge(props: Props) {
  const { fdata } = props;
  // console.log("fdata >>> ", fdata);
  return (
    <div className="w-full">
      <div className="w-full p-[24px] bg-neutral-50 rounded-2xl grid md:grid-cols-2 sm:grid-cols-1 gap-[24px]">
        {/* ------------------------------------------------------------------------------------------------------------------ */}
        {/* 111 */}
        {fdata?.map((element: any, index: number) => (
          <div className="w-full flex" key={index}>
            <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px]">
              <Image
                src="./images/test.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="w-full">
              <p className="text-neutral-300 text-[10px] uppercase font-black leading-4">
                Ер нь? #{index + 1}
              </p>
              <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
                {element.title}
              </p>
              <p className="text-neutral-600 caption mb-1">
                <div
                  className="text-gray-soft mt-3 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: element.content,
                  }}
                />
                <Link
                  href={"/newsletter-detail/" + element.topicId}
                  className="text-orange-500 ui1_lower"
                >
                  {" "}
                  цааш унших
                </Link>
              </p>
            </div>
          </div>
        ))}
        {/* ------------------------------------------------------------------------------------------------------------------ */}

        {/* <div className="w-full flex">
          <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px]">
            <Image
              src="./images/test2.svg"
              sizes="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="w-full">
            <p className="text-neutral-300 text-[10px] uppercase font-black leading-4">
              Ер нь? #12
            </p>
            <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
              Newletter issue title goes here
            </p>
            <p className="text-neutral-600 caption mb-1">
              Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
              facilisis. Arcu diam condimentum diam
              <Link href="" className="text-orange-500 ui1_lower">
                {" "}
                цааш унших
              </Link>
            </p>
          </div>
        </div>
        
        <div className="w-full flex">
          <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px]">
            <Image
              src="./images/test3.svg"
              sizes="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="w-full">
            <p className="text-neutral-300 text-[10px] uppercase font-black leading-4">
              Ер нь? #12
            </p>
            <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
              Newletter issue title goes here
            </p>
            <p className="text-neutral-600 caption mb-1">
              Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
              facilisis. Arcu diam condimentum diam
              <Link href="" className="text-orange-500 ui1_lower">
                {" "}
                цааш унших
              </Link>
            </p>
          </div>
        </div>

        
        <div className="w-full flex">
          <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px]">
            <Image
              src="./images/test4.svg"
              sizes="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="w-full">
            <p className="text-neutral-300 text-[10px] uppercase font-black leading-4">
              Ер нь? #12
            </p>
            <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
              Newletter issue title goes here
            </p>
            <p className="text-neutral-600 caption mb-1">
              Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
              facilisis. Arcu diam condimentum diam
              <Link href="" className="text-orange-500 ui1_lower">
                {" "}
                цааш унших
              </Link>
            </p>
          </div>
        </div>
        
        <div className="w-full flex">
          <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px]">
            <Image
              src="./images/test5.svg"
              sizes="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="w-full">
            <p className="text-neutral-300 text-[10px] uppercase font-black leading-4">
              Ер нь? #12
            </p>
            <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
              Newletter issue title goes here
            </p>
            <p className="text-neutral-600 caption mb-1">
              Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
              facilisis. Arcu diam condimentum diam
              <Link href="" className="text-orange-500 ui1_lower">
                {" "}
                цааш унших
              </Link>
            </p>
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px]">
            <Image
              src="./images/test6.svg"
              sizes="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="w-full">
            <p className="text-neutral-300 text-[10px] uppercase font-black leading-4">
              Ер нь? #12
            </p>
            <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
              Newletter issue title goes here
            </p>
            <p className="text-neutral-600 caption mb-1">
              Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
              facilisis. Arcu diam condimentum diam
              <Link href="" className="text-orange-500 ui1_lower">
                {" "}
                цааш унших
              </Link>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
