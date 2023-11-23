import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  listData: any;
};

export default function CategoredNews(props: Props) {
  const { title, listData } = props;
  const alertZ = () => alert("Hi");
  return (
    <div className="w-full px-[24px] mt-[15px]">
      <p className="subheading mb-[24px]">{title}</p>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[24px] pb-[50px] border-b-[1px] border-neutral-100">
        {/* ************************************************************************************************************ */}
        <div className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 ">
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
          <div className="pl-3 lg:px-3 lg:py-[20px] w-full">
            <p className="text-[12px] text-neutral-300 font-bold hidden sx:block md:block sm:block lg:hidden">
              ДОЛОО ХОНОГ БҮР
            </p>
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Ер нь?
            </p>
            <div className="">
              <p className="h-[200px] lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900 ">
                Шинжлэх ухааны ертөнцөөр ЕР НЬ сонин хачин юутай?
              </p>
            </div>
            <div className="w-full flex relative">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase">
                бүх дугаар
              </p>
              <button
                onClick={alertZ}
                className="right-0 bottom-[-6px] absolute"
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
        {/* ************************************************************************************************************ */}
        <div className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 ">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
            <div className="w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
              <div className="lg:block hidden absolute w-[150px] py-[5px] px-[8px] m-[16px] rounded-[16px] bg-neutral-0/60  text-center">
                <span className="text-[12px] text-neutral-700 font-bold text-center">
                  ДОЛОО ХОНОГ БҮР
                </span>
              </div>
              <Image
                src="./images/card_pic2.svg"
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
          <div className="pl-3 lg:px-3 lg:py-[20px] w-full">
            <p className="text-[12px] text-neutral-300 font-bold hidden sx:block md:block sm:block lg:hidden">
              ДОЛОО ХОНОГ БҮР
            </p>
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              The Future
            </p>
            <div className="">
              <p className="h-[200px] lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900 ">
                Дэлхий дахины дараагийн өрсөлдөөн болсон сансрын технологийн
                талаар хэдүүлээ ч бас мэдээлэлтэй байя л даа, тийм ээ?
              </p>
            </div>
            <div className="w-full flex relative">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase">
                бүх дугаар
              </p>
              <button
                onClick={alertZ}
                className="right-0 bottom-[-6px] absolute"
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
          <div className="pl-3 lg:px-3 lg:py-[20px] w-full">
            <p className="text-[12px] text-neutral-300 font-bold hidden sx:block md:block sm:block lg:hidden">
              ДОЛОО ХОНОГ БҮР
            </p>
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              techworm weekly
            </p>
            <div className="">
              <p className="h-[200px] lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900 ">
                Ирээдүйд хэрэг болох технологийн мэдээ
              </p>
            </div>
            <div className="w-full flex relative">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase">
                бүх дугаар
              </p>
              <button
                onClick={alertZ}
                className="right-0 bottom-[-6px] absolute"
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
          <div className="pl-3 lg:px-3 lg:py-[20px] w-full">
            <p className="text-[12px] text-neutral-300 font-bold hidden sx:block md:block sm:block lg:hidden">
              ДОЛОО ХОНОГ БҮР
            </p>
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Ер нь?
            </p>
            <div className="">
              <p className="h-[200px] lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900 ">
                Шинжлэх ухааны ертөнцөөр ЕР НЬ сонин хачин юутай?
              </p>
            </div>
            <div className="w-full flex relative">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase">
                бүх дугаар
              </p>
              <button
                onClick={alertZ}
                className="right-0 bottom-[-6px] absolute"
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
      </div>
    </div>
  );
}
