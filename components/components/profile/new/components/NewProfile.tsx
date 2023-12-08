import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  list_data: any;
};
export default function NewProfile(props: Props) {
  const { list_data } = props;
  // console.log(list_data);
  return (
    <Link
      href={"/newsletter-detail/" + list_data[0]._id}
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
              src="/images/pic1.png"
              sizes="100vw"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              width={100}
              height={100}
              alt=""
              className="w-full h-auto object-cover rounded-t-xl  md:rounded-l-xl "
            />
          </div>
          <div className=" bg-orange-500 text-neutral-0 h-[100%] rounded-b-xl md:rounded-none  md:rounded-r-xl lg:rounded-r-xl xl:rounded-r-xl p-[24px]">
            <p className="text-[10px] font-black text-orange-200">
              {list_data[0].createdDate} &#x2022; #12
            </p>
            <p className="text-[20px] md:text-[24px] leading-[29px] md:leading-[35px] font-bold mt-2">
              {list_data[0].title}
            </p>
            <div
              className="text-gray-soft mt-3 line-clamp-6"
              dangerouslySetInnerHTML={{
                __html: list_data[0].content,
              }}
            />
            {/* <p className="text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[20px] mt-2">
            Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
            facilisis. Arcu diam condimentum diam libero ac aliquam lorem
            scelerisque. Lorem ipsum dolor sit amet consectetur. Quis non nibh
            arcu arcu facilisis. Arcu diam condimentum diam libero ac aliquam
            lorem scelerisque diam libero ac
          </p> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
