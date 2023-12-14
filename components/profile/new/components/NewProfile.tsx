import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as dayjs from "dayjs";
import { ErxesImageUrl } from "@/utils";
type Props = {
  list_data: any;
};
export default function NewProfile(props: Props) {
  const dayjs = require("dayjs");
  const { list_data } = props;
  return (
    <Link
      href={"/newsletter-detail/" + list_data[0]?._id}
      className="text-orange-500 ui1_lower"
    >
      <div className="w-full px-[10px]">
        <p className="text-[10px] text-orange-500 flex items font-bold absolute mt-[25px]">
          <Image
            src="/images/sys_images/orange_dot.svg"
            width={12}
            height={12}
            alt=""
          />
          <span className="ml-[5px]">ШИНЭ</span>
        </p>
        <div className=" md:min-h-[353px] lg:min-h-[372px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 pt-[50px] border-b-[1px] border-neutral-100 mb-[24px] pb-[24px] ">
          <div className="w-full h-[164px] md:h-[100%] lg:h-[100%]">
            <Image
              src={
                list_data[0]?.image !== null
                  ? ErxesImageUrl + list_data[0]?.image.url
                  : "../images/sys_images/default.svg"
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
              className="w-full h-auto object-cover rounded-t-xl md:rounded-none lg:rounded-none md:rounded-l-xl lg:rounded-l-xl"
            />
          </div>
          <div className=" bg-orange-500 text-neutral-0 h-[100%] rounded-b-xl md:rounded-none  md:rounded-r-xl lg:rounded-r-xl xl:rounded-r-xl p-[24px]">
            <p className="text-[10px] font-black text-orange-200">
              {dayjs(list_data[0]?.createdDate).format("YYYY-MM-DD")} &#x2022;
              #1
            </p>
            <p className="text-[20px] md:text-[24px] leading-[29px] md:leading-[35px] font-bold mt-2 font-Literata">
              {list_data[0]?.title}
            </p>
            <div
              className="text-gray-soft mt-3 line-clamp-6 font-light"
              dangerouslySetInnerHTML={{
                __html: list_data[0]?.content,
              }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
