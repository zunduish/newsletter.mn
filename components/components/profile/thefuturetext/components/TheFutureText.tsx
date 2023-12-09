import React from "react";
import Image from "next/image";
type Props = {
  data: any;
};
export default function TheFutureText(props: Props) {
  const { data } = props;
  return (
    <div className="w-full m-auto px-[10px]">
      <div className="w-full border-b border-neutral-100 md:py-[70px]  sm:py-[50px] py-[50px]">
        <p className="text-[28px] leading-[42px] md:text-[48px] md:leading-[71px] lg:text-[64px] lg:leading-[95px] text-center ">
          {data.title}
          {data.id}
        </p>
      </div>
    </div>
  );
}
