import React from "react";
import Image from "next/image";

type Props = {
  data: any;
};
export default function NewsLetterDetail(props: Props) {
  const { data } = props;
  return (
    <div className="sx:w-full md:w-[722px] lg:w-[744px] mx-auto px-[15px] py-[24px] lg:py-[10px] mb-[24px] ">
      <div className="w-full">
        <Image
          src="/images/astra.png"
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          width={100}
          height={100}
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="w-full mt-[15px]">
        <div className="flex items-center">
          <Image
            src="/images/sys_images/link_logo.svg"
            width={32}
            height={32}
            alt=""
            className="w-[32px] h-[32px]"
          />
          <p className="text-[10px] leading-[16px] text-orange-200 font-bold ml-[10px]">
            THE FUTURE #12
          </p>
        </div>
        <div className="w-full pb-[20px] border-b-[1px] border-neutral-100">
          <p className="text-[20px] leading-[30px] mdtext-[32px] md:leading-[47px] font-OktaNeue">
            {data?.title}
          </p>
        </div>
      </div>

      {/* pharagraph */}
      <div className="w-full mt-[30px]">
        <div
          className="text-gray-soft mt-3"
          dangerouslySetInnerHTML={{
            __html: data?.content,
          }}
        />
      </div>
      {/* pharagraph */}
    </div>
  );
}
