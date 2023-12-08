import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ErxesImageUrl } from "@/utils";

type Props = {
  title: string;
  listData: any;
};

export default function CategoredNews(props: Props) {
  // const router = useRouter();
  // router.push("/feedback-detail/id123");
  const { title, listData } = props;
  console.log("listData > ", listData);

  // console.log(process.env.NEXT_PUBLIC_ERXES_URL);
  return (
    <div className="w-full px-[24px] mt-[15px]">
      <p className="subheading mb-[24px]">{title}</p>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[24px] pb-[50px] border-b-[1px] border-neutral-100">
        {/* ************************************************************************************************************ */}
        {listData?.map((element: any, index: number) => (
          <div
            className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 "
            key={index}
          >
            <div className="w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
              <div className=" w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
                <div className="lg:block hidden absolute w-[150px] py-[5px] px-[8px] m-[16px] rounded-[16px] bg-neutral-0/60  text-center">
                  <span className="text-[12px] text-neutral-700 font-bold text-center">
                    ДОЛОО ХОНОГ БҮР
                  </span>
                </div>
                {/* src={
                    process.env.NEXT_PUBLIC_ERXES_URL +
                    "/gateway/read-file?key=" +
                    element.backgroundImage
                   } */}
                <Image
                  src={"https://apu-speakup.pages.dev/images/brochure.svg"}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-lg lg:rounded-none lg:rounded-t-lg"
                />
              </div>
            </div>
            <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative mt-0 lg:mt-3">
              <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
                {element.title}
              </p>
              <div className="h-[180px] overflow-hidden">
                <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                  {element.description}
                  <br />
                  {/* <div className="w-full text-justify">
                    <span className="text-sm ">
                      {process.env.NEXT_PUBLIC_ERXES_URL}
                      <br />
                      {"/gateway/read-file?key="}
                      <br />
                      {element.backgroundImage}
                    </span>
                  </div> */}
                </p>
              </div>
              <div className="w-full flex ">
                <Link
                  href={
                    element.categories.length > 0
                      ? "/newsletter/" + element.categories[0]?._id
                      : "/"
                  }
                >
                  <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                    бүх дугаар
                  </p>
                </Link>
                <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
                  <Link href="/newsletter/hello">
                    <Image
                      src="./images/sys_images/add_button.svg"
                      width={40}
                      height={40}
                      alt=""
                      className=" rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* ************************************************************************************************************ */}
        {/* <div className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 ">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
            <div className="w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
              <div className="lg:block hidden absolute w-[150px] py-[5px] px-[8px] m-[16px] rounded-[16px] bg-neutral-0/60  text-center">
                <span className="text-[12px] text-neutral-700 font-bold text-center">
                  ДОЛОО ХОНОГ БҮР
                </span>
              </div>
              <Image
                src="./images/card_pic1.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                width={100}
                height={100}
                alt=""
                className="rounded-lg lg:rounded-none lg:rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Гүнзгий судалж мэдсэн сэдвээ бусадтай хуваалцахыг хүсвэл
                бидэнтэй нэгдэж цахим товхимол бүтээгээрэй.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                бүх дугаар
              </p>
              <button
                onClick={alertZ}
                className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute"
              >
                <Image
                  src="./images/sys_images/add_button.svg"
                  width={40}
                  height={40}
                  alt=""
                  className=" rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 ">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
            <div className="w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
              <div className="lg:block hidden absolute w-[150px] py-[5px] px-[8px] m-[16px] rounded-[16px] bg-neutral-0/60  text-center">
                <span className="text-[12px] text-neutral-700 font-bold text-center">
                  ДОЛОО ХОНОГ БҮР
                </span>
              </div>
              <Image
                src="./images/card_pic3.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                width={100}
                height={100}
                alt=""
                className="rounded-lg lg:rounded-none lg:rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Гүнзгий судалж мэдсэн сэдвээ бусадтай хуваалцахыг хүсвэл
                бидэнтэй нэгдэж цахим товхимол бүтээгээрэй.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                бүх дугаар
              </p>
              <button
                onClick={alertZ}
                className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute"
              >
                <Image
                  src="./images/sys_images/add_button.svg"
                  width={40}
                  height={40}
                  alt=""
                  className=" rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 ">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
            <div className="w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
              <div className="lg:block hidden absolute w-[150px] py-[5px] px-[8px] m-[16px] rounded-[16px] bg-neutral-0/60  text-center">
                <span className="text-[12px] text-neutral-700 font-bold text-center">
                  ДОЛОО ХОНОГ БҮР
                </span>
              </div>
              <Image
                src="./images/card_pic4.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                width={100}
                height={100}
                alt=""
                className="rounded-lg lg:rounded-none lg:rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Гүнзгий судалж мэдсэн сэдвээ бусадтай хуваалцахыг хүсвэл
                бидэнтэй нэгдэж цахим товхимол бүтээгээрэй.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                бүх дугаар
              </p>
              <button
                onClick={alertZ}
                className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute"
              >
                <Image
                  src="./images/sys_images/add_button.svg"
                  width={40}
                  height={40}
                  alt=""
                  className=" rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]"
                />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
