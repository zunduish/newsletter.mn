import React from "react";
import Image from "next/image";
import { ErxesImageUrl } from "@/utils";

type Props = {
  data: any;
};
export default function NewsLetterDetail(props: Props) {
  const { data } = props;
  const [checkTest, setCheckTest] = React.useState(false);
  const idCopy = () => {
    setCheckTest(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(handleCecksetCheckTest, 2000);
  };
  const handleCecksetCheckTest = () => setCheckTest(false);
  return (
    <div className="sx:w-full md:w-[722px] lg:w-[744px] mx-auto px-[15px] py-[24px] lg:py-[10px] mb-[24px] ">
      {checkTest && (
        <div className="transition delay-300 duration-300 block fixed inset-5 bg-none z-10  h-[100px] w-full">
          <div className="bg-neutral-0 mt-[50px] w-[150px] m-auto px-3 rounded-xl bg-white text-center border-[1px] border-neutral-100 shadow-2xl">
            <p className="text-[14px] ">URL copied</p>
          </div>
        </div>
      )}
      <div className="w-full">
        <Image
          src={
            data?.image !== null
              ? ErxesImageUrl + data?.image.url
              : "./images/sys_images/default.svg"
          }
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
            onClick={idCopy}
            src="/images/sys_images/link_logo.svg"
            width={32}
            height={32}
            alt=""
            className="w-[32px] h-[32px] hover:border"
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
