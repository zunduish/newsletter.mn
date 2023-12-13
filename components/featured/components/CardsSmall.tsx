import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardsSmall() {
  const [seeMore, setSeemore] = useState(false);

  const handleSeeMore = () => setSeemore(!seeMore);

  const [widthDetect, setWidthDetect] = useState(100);
  const widthDetectF = () => setWidthDetect(window.screen.availWidth);
  return (
    <div className="w-full">
      <div className="w-full p-[24px] bg-neutral-50 rounded-2xl grid md:grid-cols-2 sm:grid-cols-1 gap-[24px]">
        {/* ------------------------------------------------------------------------------------------------------------------ */}
        {/* 111 */}
        <div className="w-full flex">
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
        {/* ------------------------------------------------------------------------------------------------------------------ */}
        {/* 222 */}
        <div className="w-full flex">
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
        {/* 333 */}
        <div className="w-full flex">
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
        {widthDetect}
        <a
          className="border p-5 bg-orange-300 rounded-lg"
          onClick={widthDetectF}
        >
          width
        </a>
        {seeMore && (
          <div className="w-full">
            {/* 444 */}
            <div className="w-full flex">
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
                  Ер нь? #12
                </p>
                <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
                  Newletter issue title goes here
                </p>
                <p className="text-neutral-600 caption mb-1">
                  Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu
                  arcu facilisis. Arcu diam condimentum diam
                  <Link href="" className="text-orange-500 ui1_lower">
                    {" "}
                    цааш унших
                  </Link>
                </p>
              </div>
            </div>
            {/* 555 */}
            <div className="w-full flex">
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
                  Ер нь? #12
                </p>
                <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
                  Newletter issue title goes here
                </p>
                <p className="text-neutral-600 caption mb-1">
                  Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu
                  arcu facilisis. Arcu diam condimentum diam
                  <Link href="" className="text-orange-500 ui1_lower">
                    {" "}
                    цааш унших
                  </Link>
                </p>
              </div>
            </div>
            {/* 666 */}
            <div className="w-full flex">
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
                  Ер нь? #12
                </p>
                <p className="ontslox_dugaar_title text-neutral-900 mb-1 line-clamp-1">
                  Newletter issue title goes here
                </p>
                <p className="text-neutral-600 caption mb-1">
                  Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu
                  arcu facilisis. Arcu diam condimentum diam
                  <Link href="" className="text-orange-500 ui1_lower">
                    {" "}
                    цааш унших
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full grid justify-items-center">
        <div className="mt-[-16px]">
          {!seeMore ? (
            <Image
              onClick={handleSeeMore}
              width={32}
              height={32}
              src={"./images/see_more_down.svg"}
              alt=""
            />
          ) : (
            <Image
              onClick={handleSeeMore}
              width={32}
              height={32}
              src={"./images/see_more_up.svg"}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}
