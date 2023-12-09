import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  listData: any;
};

export default function CategoredNComingSoon(props: Props) {
  const { title, listData } = props;
  return (
    <div className="w-full px-[24px] mt-[15px]">
      <p className="subheading mb-[24px]">{title}</p>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[24px] pb-[50px]  border-neutral-200">
        {/* ************************************************************************************************************ */}
        <div className="border rounded-lg border-neutral-200 bg-neutral-100 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[264px] lg:p-[52px] p-[15px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg bg-neutral-900 ">
            <div className="lg:w-[160px] lg:h-[160px] w-[32px] h-[32px] block m-auto">
              <Image
                src="./images/cs_1.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt=""
                className=" rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam
                scelerisque sed.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                ТУН УДАХГҮЙ...
              </p>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
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
        <div className="border rounded-lg border-neutral-200 bg-neutral-100 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[264px] lg:p-[52px] p-[15px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg bg-neutral-900 ">
            <div className="lg:w-[160px] lg:h-[160px] w-[32px] h-[32px] block m-auto">
              <Image
                src="./images/cs_2.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt=""
                className=" rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam
                scelerisque sed.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                ТУН УДАХГҮЙ...
              </p>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
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
        <div className="border rounded-lg border-neutral-200 bg-neutral-100 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[264px] lg:p-[52px] p-[15px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg bg-neutral-900 ">
            <div className="lg:w-[160px] lg:h-[160px] w-[32px] h-[32px] block m-auto">
              <Image
                src="./images/cs_3.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt=""
                className=" rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam
                scelerisque sed.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                ТУН УДАХГҮЙ...
              </p>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
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
        <div className="border rounded-lg border-neutral-200 bg-neutral-100 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[264px] lg:p-[52px] p-[15px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg bg-neutral-900 ">
            <div className="lg:w-[160px] lg:h-[160px] w-[32px] h-[32px] block m-auto">
              <Image
                src="./images/cs_4.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt=""
                className=" rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam
                scelerisque sed.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                ТУН УДАХГҮЙ...
              </p>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
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
        <div className="border rounded-lg border-neutral-200 bg-neutral-100 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[264px] lg:p-[52px] p-[15px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg bg-neutral-900 ">
            <div className="lg:w-[160px] lg:h-[160px] w-[32px] h-[32px] block m-auto">
              <Image
                src="./images/cs_5.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt=""
                className=" rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam
                scelerisque sed.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                ТУН УДАХГҮЙ...
              </p>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
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
        <div className="border rounded-lg border-neutral-200 bg-neutral-100 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[264px] lg:p-[52px] p-[15px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg bg-neutral-900 ">
            <div className="lg:w-[160px] lg:h-[160px] w-[32px] h-[32px] block m-auto">
              <Image
                src="./images/cs_6.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt=""
                className=" rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam
                scelerisque sed.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                ТУН УДАХГҮЙ...
              </p>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
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
        <div className="border rounded-lg border-neutral-200 bg-neutral-100 flex lg:grid p-[20px] lg:p-0">
          <div className="w-[60px] h-[60px] lg:w-full lg:h-[264px] lg:p-[52px] p-[15px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg bg-neutral-900 ">
            <div className="lg:w-[160px] lg:h-[160px] w-[32px] h-[32px] block m-auto">
              <Image
                src="./images/cs_7.svg"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt=""
                className=" rounded-t-lg"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
            <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
              Dataduran
            </p>
            <div className="h-[180px] overflow-hidden">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam
                scelerisque sed.
              </p>
            </div>
            <div className="w-full flex ">
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                ТУН УДАХГҮЙ...
              </p>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
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
