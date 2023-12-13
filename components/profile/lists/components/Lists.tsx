import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ErxesImageUrl } from "@/utils";

type Props = {
  list_data: any;
};
export default function Lists(props: Props) {
  const { list_data } = props;
  const dayjs = require("dayjs");
  return (
    <div className="w-full px-[10px]">
      {/* DEFAULT --------------------------------------------------------------------------------------------- */}
      {list_data.length > 1 &&
        list_data.map(
          (element: any, index: number) =>
            index >= 1 && (
              <Link href={"/newsletter-detail/" + element._id} key={index}>
                <div className="w-full grid grid-cols-1 gap-0 lg:flex border-b-[1px] border-neutral-100 pb-[24px] mb-[24px] px-[10px]">
                  <div className="w-[50%] sx:h-[100px] sm:h-[100px] md:h-[100px] lg:w-[168px] ">
                    <Image
                      src={
                        element.image !== null
                          ? ErxesImageUrl + element.image.url
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
                      className="object-cover rounded-[4px]"
                    />
                  </div>
                  <div className="lg:pl-[20px] w-full mt-[10px] lg:mt-0">
                    <p className="text-orange-200 font-black text-[10px] leading-[16px]">
                      {/* {element.createdDate}  */}
                      {dayjs(element.createdDate).format("YYYY-MM-DD")} #
                      {index + 1}
                    </p>
                    <p className="font-bold text-[16px] leading-[23px]  mt-1 line-clamp-2">
                      {element.title}
                    </p>
                    <div
                      className="text-gray-soft mt-3 line-clamp-2 text-[14px]"
                      dangerouslySetInnerHTML={{
                        __html: element.content,
                      }}
                    />
                  </div>
                </div>
              </Link>
            )
        )}
      {/* DEFAULT --------------------------------------------------------------------------------------------- */}
    </div>
  );
}
