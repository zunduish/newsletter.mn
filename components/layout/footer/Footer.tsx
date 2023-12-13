import { Router } from "next/router";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import { GET_KNOWLEDGE_BASE_TOPICS_M } from "../../categorednews/graphql/queries";
import { getErxesApolloClient } from "@/lib/initApollo";
import Loader from "@/components/common/Loader";
import Link from "next/link";

export default function Footer() {
  // const { innerWidth: width, innerHeight: height } = window;
  const field_query = useQuery(gql(GET_KNOWLEDGE_BASE_TOPICS_M), {
    variables: { page: 1, perPage: 1000 },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });
  return field_query.loading ? (
    <Loader type="Footer" />
  ) : (
    <div className="w-full mt-[50px] bg-neutral-100">
      <div className="container_custom  lg:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0">
        <div className=" lg:col-span-4 p-[24px]">
          <p className="font-bold text-[20px] leading-[29px] md:text-[24px] md:leading-[35px] lg:text-[24px] lg:leading-[35px]">
            Newsletters by Unread
          </p>
          <p className="mt-3 text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[14px] lg:leading-[18px] ">
            © 2015-2023 Анрид Медиа ХХК. Бүх эрх хуулиар хамгаалагдсан.
            Контентуудыг зөвшөөрөлгүйгээр болон дурдалгүйгээр нийтлэх, хэвлэх,
            эш татахыг хориглоно.
          </p>
        </div>

        <div className=" lg:col-span-8 p-[24px]">
          <p className="text-justify mb-[30px] uppercase font-bold text-[12px] leading-[20px] md:text-[14px] md:leading-[24px] lg:text-[14px] lg:leading-[24px]">
            {field_query.data?.knowledgeBaseTopics?.map(
              (element: any, index: number) => (
                <Link
                  key={index}
                  href={
                    element.categories.length > 0
                      ? "/newsletter/" +
                        element.categories[0]?._id +
                        "?brandId=" +
                        element?.brand?._id
                      : "/"
                  }
                >
                  {element.title}
                  &#x2022;
                </Link>
              )
            )}
            {/* ер нь? &#x2022; the future &#x2022; techworm weekly &#x2022; wheels
            on &#x2022; 5 талх, 2 загас &#x2022; долоо хоногийн тойм &#x2022;
            rest of mongolia &#x2022; this week in mongolia &#x2022; the Balance
            &#x2022; battery saver &#x2022; sdg 2030 &#x2022; sportworm &#x2022;
            Travel &#x2022; Тасалбар &#x2022; pop culture data duran &#x2022;
            krypto &#x2022; тун удахгүй */}
          </p>
          {/* fb insta twitter */}
          <div className="w-full flex items-center">
            <Image
              src="/images/sys_images/fb_logo.svg"
              width={22}
              height={22}
              alt=""
              className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[22px] lg:h-[22px] mr-[16px]"
            />
            <Image
              src="/images/sys_images/insta_logo.svg"
              width={22}
              height={22}
              alt=""
              className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[22px] lg:h-[22px] mr-[16px]"
            />
            <Image
              src="/images/sys_images/twitter_logo.svg"
              width={22}
              height={22}
              alt=""
              className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[22px] lg:h-[22px] mr-[16px]"
            />
            <button className="flex px-[14px] py-[3px] items-center border border-neutral-200 rounded-full">
              <span className="mr-[5px] font-bold text-[12px] leading-[20px] md:text-[14px] md:leading-[24px] lg:text-[14px] lg:leading-[24px] ">
                UNREAD.TODAY{" "}
              </span>
              <Image
                src="/images/sys_images/right_arrow.svg"
                width={22}
                height={22}
                alt=""
                className="w-[14px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
