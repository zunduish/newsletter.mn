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
        <div className="min-h-[100px] border rounded-lg border-neutral-100 pb-2 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[120px] h-[120px] lg:w-full lg:h-[264px] rounded-lg relative">
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
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
              className="w-[60px] h-[60px] rounded-t-lg"
            />
          </div>
          <div className="lg:px-3 lg:pt-3">
            <p className="pl-3 text-[12px] text-neutral-300 font-bold hidden sx:block md:block sm:block">
              ДОЛОО ХОНОГ БҮР
            </p>
            <p className="xl:mt-[60px] lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900 pl-3 mt-[10px]">
              The Future
            </p>
            <div className="">
              <p className="h-[150px] lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900  pl-3">
                Дэлхий дахины дараагийн өрсөлдөөн болсон сансрын технологийн
                талаар хэдүүлээ ч бас мэдээлэлтэй байя л даа, тийм ээ?
              </p>
            </div>
            <div className="w-full flex relative mt-[10px] mb-4">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold lg:leading-[24px] md:leading-[24px] sm:leading-[20px] text-orange-500">
                БҮХ ДУГААР
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
        <div className="min-h-[100px] border rounded-lg border-neutral-100 pb-2 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[120px] h-[120px] lg:w-full lg:h-[264px] rounded-lg relative">
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
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
              className="w-[60px] h-[60px] rounded-t-lg"
            />
          </div>
          <div className="lg:px-3 lg:pt-3">
            <p className="pl-3 text-[12px] text-neutral-300 font-bold hidden sx:block md:block sm:block">
              ДОЛОО ХОНОГ БҮР
            </p>
            <p className="xl:mt-[60px] lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900 pl-3 mt-[10px]">
              The Future
            </p>
            <div className="">
              <p className="h-[150px] lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900  pl-3">
                Дэлхий дахины дараагийн өрсөлдөөн болсон сансрын технологийн
                талаар хэдүүлээ ч бас мэдээлэлтэй байя л даа, тийм ээ?
              </p>
            </div>
            <div className="w-full flex relative mt-[10px] mb-4">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold lg:leading-[24px] md:leading-[24px] sm:leading-[20px] text-orange-500">
                БҮХ ДУГААР
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
        <div className="min-h-[100px] border rounded-lg border-neutral-100 pb-2 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[120px] h-[120px] lg:w-full lg:h-[264px] rounded-lg relative">
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
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
              className="w-[60px] h-[60px] rounded-t-lg"
            />
          </div>
          <div className="lg:px-3 lg:pt-3">
            <p className="pl-3 text-[12px] text-neutral-300 font-bold hidden sx:block md:block sm:block">
              ДОЛОО ХОНОГ БҮР
            </p>
            <p className="xl:mt-[60px] lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900 pl-3 mt-[10px]">
              The Future
            </p>
            <div className="">
              <p className="h-[150px] lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900  pl-3">
                Дэлхий дахины дараагийн өрсөлдөөн болсон сансрын технологийн
                талаар хэдүүлээ ч бас мэдээлэлтэй байя л даа, тийм ээ?
              </p>
            </div>
            <div className="w-full flex relative mt-[10px] mb-4">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold lg:leading-[24px] md:leading-[24px] sm:leading-[20px] text-orange-500">
                БҮХ ДУГААР
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
        <div className="min-h-[100px] border rounded-lg border-neutral-100 pb-2 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[120px] h-[120px] lg:w-full lg:h-[264px] rounded-lg relative">
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
                height: "auto",
              }}
              width={100}
              height={100}
              alt=""
              className="w-[60px] h-[60px] rounded-t-lg"
            />
          </div>
          <div className="lg:px-3 lg:pt-3">
            <p className="pl-3 text-[12px] text-neutral-300 font-bold hidden sx:block md:block sm:block">
              ДОЛОО ХОНОГ БҮР
            </p>
            <p className="xl:mt-[60px] lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900 pl-3 mt-[10px]">
              The Future
            </p>
            <div className="">
              <p className="h-[150px] lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900  pl-3">
                Дэлхий дахины дараагийн өрсөлдөөн болсон сансрын технологийн
                талаар хэдүүлээ ч бас мэдээлэлтэй байя л даа, тийм ээ?
              </p>
            </div>
            <div className="w-full flex relative mt-[10px] mb-4">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold lg:leading-[24px] md:leading-[24px] sm:leading-[20px] text-orange-500">
                БҮХ ДУГААР
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
