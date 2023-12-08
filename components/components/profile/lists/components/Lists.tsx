import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  list_data: any;
};
export default function Lists(props: Props) {
  const { list_data } = props;
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
                      src="/images/sys_images/car.png"
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
                      {element.createdDate} #{index + 1}
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
                    {/* <p className="font-normal text-[14px] leading-[18px] mt-1">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam lorem
                scelerisque
              </p> */}
                  </div>
                </div>
              </Link>
            )
        )}

      {/* DEFAULT --------------------------------------------------------------------------------------------- */}
    </div>
  );
}
{
  /* <div className="w-full grid grid-cols-1 gap-0 lg:flex border-b-[1px] border-neutral-100 pb-[24px] mb-[24px] px-[10px]">
<div className="w-[50%] sx:h-[100px] sm:h-[100px] md:h-[100px] lg:w-[168px] ">
  <Image
    src="/images/sys_images/car.png"
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
    2023/10/24 #12
  </p>
  <p className="font-bold text-[16px] leading-[23px]  mt-1">
    Password, Session, Cookie, Token, JWT, SSO, OAuth - Authentication
    Explained - Part 2
  </p>
  <p className="font-normal text-[14px] leading-[18px] mt-1">
    Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
    facilisis. Arcu diam condimentum diam libero ac aliquam lorem
    scelerisque
  </p>
</div>
</div>
<div className="w-full grid grid-cols-1 gap-0 lg:flex border-b-[1px] border-neutral-100 pb-[24px] mb-[24px] px-[10px]">
<div className="w-[50%] sx:h-[100px] sm:h-[100px] md:h-[100px] lg:w-[168px] ">
  <Image
    src="/images/sys_images/car.png"
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
    2023/10/24 #12
  </p>
  <p className="font-bold text-[16px] leading-[23px]  mt-1">
    Password, Session, Cookie, Token, JWT, SSO, OAuth - Authentication
    Explained - Part 2
  </p>
  <p className="font-normal text-[14px] leading-[18px] mt-1">
    Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
    facilisis. Arcu diam condimentum diam libero ac aliquam lorem
    scelerisque
  </p>
</div>
</div>
<div className="w-full grid grid-cols-1 gap-0 lg:flex border-b-[1px] border-neutral-100 pb-[24px] mb-[24px] px-[10px]">
<div className="w-[50%] sx:h-[100px] sm:h-[100px] md:h-[100px] lg:w-[168px] ">
  <Image
    src="/images/sys_images/car.png"
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
    2023/10/24 #12
  </p>
  <p className="font-bold text-[16px] leading-[23px]  mt-1">
    Password, Session, Cookie, Token, JWT, SSO, OAuth - Authentication
    Explained - Part 2
  </p>
  <p className="font-normal text-[14px] leading-[18px] mt-1">
    Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
    facilisis. Arcu diam condimentum diam libero ac aliquam lorem
    scelerisque
  </p>
</div>
</div>
<div className="w-full grid grid-cols-1 gap-0 lg:flex border-b-[1px] border-neutral-100 pb-[24px] mb-[24px] px-[10px]">
<div className="w-[50%] sx:h-[100px] sm:h-[100px] md:h-[100px] lg:w-[168px] ">
  <Image
    src="/images/sys_images/car.png"
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
    2023/10/24 #12
  </p>
  <p className="font-bold text-[16px] leading-[23px]  mt-1">
    Password, Session, Cookie, Token, JWT, SSO, OAuth - Authentication
    Explained - Part 2
  </p>
  <p className="font-normal text-[14px] leading-[18px] mt-1">
    Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
    facilisis. Arcu diam condimentum diam libero ac aliquam lorem
    scelerisque
  </p>
</div>
</div>
<div className="w-full grid grid-cols-1 gap-0 lg:flex border-b-[1px] border-neutral-100 pb-[24px] mb-[24px] px-[10px]">
<div className="w-[50%] sx:h-[100px] sm:h-[100px] md:h-[100px] lg:w-[168px] ">
  <Image
    src="/images/sys_images/car.png"
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
    2023/10/24 #12
  </p>
  <p className="font-bold text-[16px] leading-[23px]  mt-1">
    Password, Session, Cookie, Token, JWT, SSO, OAuth - Authentication
    Explained - Part 2
  </p>
  <p className="font-normal text-[14px] leading-[18px] mt-1">
    Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
    facilisis. Arcu diam condimentum diam libero ac aliquam lorem
    scelerisque
  </p>
</div>
</div>
<div className="w-full grid grid-cols-1 gap-0 lg:flex border-b-[1px] border-neutral-100 pb-[24px] mb-[24px] px-[10px]">
<div className="w-[50%] sx:h-[100px] sm:h-[100px] md:h-[100px] lg:w-[168px] ">
  <Image
    src="/images/sys_images/car.png"
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
    2023/10/24 #12
  </p>
  <p className="font-bold text-[16px] leading-[23px]  mt-1">
    Password, Session, Cookie, Token, JWT, SSO, OAuth - Authentication
    Explained - Part 2
  </p>
  <p className="font-normal text-[14px] leading-[18px] mt-1">
    Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
    facilisis. Arcu diam condimentum diam libero ac aliquam lorem
    scelerisque
  </p>
</div>
</div> */
}
