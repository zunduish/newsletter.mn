import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ErxesImageUrl } from "@/utils";
import Modal from "react-modal";
import RegisterContainer from "../../register/container/RegisterContainer";

type Props = {
  title: string;
  listData: any;
};

export default function CategoredNews(props: Props) {
  const afterOpenModal = () => {};
  const [modalArticlesOpen, setModalArticlesOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalDesc, setModalDesc] = useState();
  const openModalArticles = (title: any, desc: any) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalArticlesOpen(true);
  };
  const closeModalArticles = () => setModalArticlesOpen(false);

  // const router = useRouter();
  // router.push("/feedback-detail/id123");
  const { title, listData } = props;
  // console.log("listData > ", listData);

  // console.log(process.env.NEXT_PUBLIC_ERXES_URL);
  return (
    <div className="w-full px-[24px] mt-[15px]">
      <p className="subheading mb-[24px]">{title}</p>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[24px] pb-[50px] border-b-[1px] border-neutral-100">
        {/* ************************************************************************************************************ */}
        {listData?.map((element: any, index: number) => (
          <div
            className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 "
            key={index}
          >
            <Link
              href={
                element.categories.length > 0
                  ? "/newsletter/" +
                    element.categories[0]?._id +
                    "?brandId=" +
                    element?.brand?._id
                  : "/"
              }
            >
              <div className=" w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
                <div className=" w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
                  <div className="lg:block hidden absolute w-[150px] py-[5px] px-[8px] m-[16px] rounded-[16px] bg-neutral-0/60  text-center">
                    <span className="text-[12px] text-neutral-700 font-bold text-center">
                      ДОЛОО ХОНОГ БҮР
                    </span>
                  </div>
                  {/* src={
                  process.env.NEXT_PUBLIC_ERXES_URL +
                  "/gateway/read-file?key=" +
                  element.backgroundImage
                } */}
                  <Image
                    src={
                      element.backgroundImage !== null
                        ? ErxesImageUrl + element.backgroundImage
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
                    className="rounded-lg lg:rounded-none lg:rounded-t-lg"
                  />
                </div>
              </div>
            </Link>
            <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative mt-0 lg:mt-3">
              <Link
                href={
                  element.categories.length > 0
                    ? "/newsletter/" +
                      element.categories[0]?._id +
                      "?brandId=" +
                      element?.brand?._id
                    : "/"
                }
              >
                <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900">
                  {element.title}
                </p>
                <div className="h-[180px] overflow-hidden">
                  <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] font-normal lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900">
                    {element.description}
                    <br />
                    {/* <div className="w-full text-justify">
                    <span className="text-sm ">
                    {process.env.NEXT_PUBLIC_ERXES_URL}
                    <br />
                    {"/gateway/read-file?key="}
                    <br />
                    {element.backgroundImage}
                    </span>
                  </div> */}
                  </p>
                </div>
              </Link>
              <div className="w-full flex ">
                <Link
                  href={
                    element.categories.length > 0
                      ? "/newsletter/" + element.categories[0]?._id
                      : "/"
                  }
                >
                  <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                    бүх дугаар
                  </p>
                </Link>
                <button
                  onClick={() => {
                    openModalArticles(element.title, element.description);
                  }}
                  className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute"
                >
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
        ))}
        {/* ************************************************************************************************************ */}
        <Modal
          isOpen={modalArticlesOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModalArticles}
          appElement={[]}
          contentLabel="Example Modal"
          className="w-[95%] md:w-[600px] lg:w-[600px] min-h-[200px] max-h-[90%] px-[10px] md:px-[50px] lg:px-[100px] bg-white py-[20px] md:py-[30px] lg:py-[50px] flex absolute left-[5%] right-[5%] md:left-[10%] md:right-[10%] lg:left-[15%] lg:right-[15%]  mt-[30px] mb-[30px] bg-neutral-0 rounded-2xl"
        >
          <div className="relative min-h-[150px] overflow-scroll overflow_scroll_container w-full ">
            <div className="py-4 ">
              <div className="w-full mb-3 py-1 grid justify-items-center text-center">
                <Image
                  src={"./images/card_pic1.svg"}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-lg w-[50%]"
                />
                <p className="text-xl  mt-[20px] text-[16px] md:text-[24px] lg:text-[28px] font-bold">
                  {modalTitle}
                </p>
                <p className="text-[14px] md:text-[16px] lg:text-[16px]  mt-[10px]">
                  {modalDesc}
                </p>
              </div>
              <div className="w-full mt-[30px]">
                <RegisterContainer />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
