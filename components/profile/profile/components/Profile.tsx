import React from "react";
import Image from "next/image";
import RegisterContainer from "../../../register/container/RegisterContainer";
import { GET_USER_DETAIL } from "../graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";
import { ErxesImageUrl } from "@/utils";

type Props = {
  cat_data: any;
  id: string;
  uid: string;
};
export default function Profile(props: Props) {
  const { cat_data, id, uid } = props;
  const { loading, error, data } = useQuery(gql(GET_USER_DETAIL), {
    variables: { id: uid },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });

  return (
    <div className="w-full py-[24px] px-[10px]">
      <div className="w-full">
        <Image
          src={
            cat_data?.backgroundImage !== null
              ? ErxesImageUrl + cat_data?.backgroundImage
              : "../images/sys_images/default.svg"
          }
          // src="/images/rocket.png"
          width={76}
          height={76}
          alt=""
          className="w-[76px] h-[76px] sm:m-auto md:m-0 lg:m-0 rounded-lg"
        />
      </div>
      <p className="text-[16px] leading-[23px] font-bold mt-4">
        {cat_data?.title}
      </p>
      <p className="text-[12px] leading-[16px] font-normal text-neutral-500 mt-2">
        {cat_data?.description}
      </p>

      <div className="w-full border-b-[1px] border-neutral-100 pb-[24px] mb-[24px]">
        <RegisterContainer />
      </div>
      {/* <div className="w-full border-b-[1px] border-neutral-100 pb-[24px] mb-[24px]">
        <form>
          <div className="w-full border border-neutral-100 rounded-lg flex p-[5px]  mt-[15px]">
            <Image
              src="/images/sys_images/reg_contact_logo.svg"
              width={18}
              height={18}
              alt=""
              className="ml-[5px]"
            />
            <input
              className="w-full outline-none text-[16px] ml-[10px] text-neutral-500"
              placeholder="Таны нэр"
            />
          </div>
          <div className="w-full border border-neutral-100 rounded-lg flex p-[5px]  mt-[15px]">
            <Image
              src="/images/sys_images/reg_contact_logo.svg"
              width={18}
              height={18}
              alt=""
              className="ml-[5px]"
            />
            <input
              className="w-full outline-none text-[16px] ml-[10px] text-neutral-500"
              placeholder="Имэйл хаяг"
            />
          </div>
          <div className="w-full flex items-center">
            <input
              type="submit"
              value={"Бүртгүүлэх"}
              className="min-w-[100px] bg-orange-500 text-neutral-0 text-12px px-[16px] py-[4px] md:text-14px md:px-[20px] md:py-[8px] lg:text-16px lg:px-[24px] lg:py-[12px] rounded-lg mt-[12px] "
            />
          </div>
        </form>
      </div> */}

      {/* profile */}
      <div className="border border-neutral-100 rounded-xl w-full p-[24px] mt-[20px]">
        <div className="w-full">
          <Image
            // {data?.userDetail?.details?.position}
            src={
              data?.userDetail?.details?.avatar !== null
                ? ErxesImageUrl + data?.userDetail?.details?.avatar
                : "../images/sys_images/default.svg"
            }
            // src="/images/avatar.png"
            width={82}
            height={82}
            alt=""
            className="w-[82px] h-[82px] rounded-full sx:m-auto sm:m-auto md:m-0 lg:m-0"
          />
        </div>
        <div className="w-full">
          <p className="text-[16px] leading-[20px] font-bold  mt-3">
            {data?.userDetail?.details?.firstName}
          </p>
          <p className="text-[12px] leading-[16px] flex mt-2 text-neutral-400">
            {data?.userDetail?.details?.position} <span>&nbsp; | &nbsp; </span>
            <span className="text-orange-500 font-bold">
              {data?.userDetail?.details?.description}
            </span>
            {/* zzz */}
          </p>
        </div>
        <div className="w-full flex mt-[15px]">
          <Image
            src="/images/sys_images/fb_logo_rounded.svg"
            width={32}
            height={32}
            alt=""
          />
          <Image
            src="/images/sys_images/insta_logo_rounded.svg"
            width={32}
            height={32}
            alt=""
            className="ml-[10px]"
          />
          <Image
            src="/images/sys_images/x_logo_rounded.svg"
            width={32}
            height={32}
            alt=""
            className="ml-[10px]"
          />
        </div>
      </div>
    </div>
  );
}
