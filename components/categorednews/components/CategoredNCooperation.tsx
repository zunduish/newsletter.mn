import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { ErxesImageUrl } from "@/utils";
import RegisterContainer from "../../register/container/RegisterContainer";

type Props = {
  title: string;
  listData: any;
};

export default function CategoredNCooperation(props: Props) {
  const { title, listData } = props;
  const afterOpenModal = () => {};
  const [modalArticlesOpen, setModalArticlesOpen] = React.useState(false);
  const closeModalArticles = () => setModalArticlesOpen(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalDesc, setModalDesc] = useState();
  const [modalImage, setModalImage] = useState();
  const openModalArticles = (title: any, desc: any, backgroundImage: any) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalImage(backgroundImage);
    setModalArticlesOpen(true);
  };
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
            <div className="w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
              <div className="w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
                <div className="lg:block hidden absolute w-[150px] py-[5px] px-[8px] m-[16px] rounded-[16px] bg-neutral-0/60  text-center">
                  <span className="text-[12px] text-neutral-700 font-bold text-center">
                    ДОЛОО ХОНОГ БҮР
                  </span>
                </div>
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
            <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
              <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900 font-Literata">
                {element.title}
              </p>
              <div className="h-[180px] overflow-hidden">
                <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900 font-light">
                  {element.description}
                </p>
              </div>
              <div className="w-full flex ">
                <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold text-orange-500 uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                  бүх дугаар
                </p>
                <button
                  // btn 1
                  onClick={() => {
                    openModalArticles(
                      element.title,
                      element.description,
                      element.backgroundImage
                    );
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
        {/* linear bg */}
        <div className="bg-gradient-to-tr from-linear-pink via-linear-blue to-linear-sky p-[3px] rounded-lg ">
          <div className=" rounded-lg flex lg:grid p-[20px] h-[100%] lg:p-0 bg-orange-50">
            <div className="w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg bg-orange-100">
              {/* image container */}
              <div className="w-[60px] h-[60px] p-[10px] lg:p-[15px] lg:w-[75%] m-auto lg:h-auto relative ">
                <Image
                  src="./images/sys_images/unread_logo2.svg"
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                  width={100}
                  height={100}
                  alt=""
                  className="lg:mt-[35px]"
                />
              </div>
            </div>
            <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative">
              <p className="lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold text-neutral-900 font-Literata">
                Товхимол бичих үү?
              </p>
              <div className="h-[180px] overflow-hidden">
                <p className=" lg:text-[16px] md:text-[16px] sm:text-[14px] lg:leading-[20px] md:leading-[20px] sm:leading-[18px] text-neutral-900 font-light">
                  Гүнзгий судалж мэдсэн сэдвээ бусадтай хуваалцахыг хүсвэл
                  бидэнтэй нэгдэж цахим товхимол бүтээгээрэй.
                </p>
              </div>
              <div className="w-full flex ">
                <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] font-bold uppercase left-[10px] bottom-[5px] lg:bottom-[20px] absolute">
                  хүсэлт илгээх
                </p>
                <button
                  // onClick={openModalArticles}
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
        </div>
        {/* linear bg */}
      </div>

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
                src={
                  modalImage !== null
                    ? ErxesImageUrl + modalImage
                    : "./images/sys_images/default.svg"
                }
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "40%",
                  height: "100%",
                }}
                width={100}
                height={100}
                alt=""
                className="rounded-lg"
              />
              <p className="text-xl  mt-[20px] text-[16px] md:text-[24px] lg:text-[28px] font-bold font-Literata">
                {modalTitle}
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[16px] mt-[10px] font-light">
                {modalDesc}
              </p>
            </div>
            <div className="w-full mt-[30px]">
              <RegisterContainer />
            </div>
          </div>
        </div>
      </Modal>
      {/*         
      <Modal
        isOpen={modalArticlesOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalArticles}
        appElement={[]}
        contentLabel="Example Modal"
        className="w-[90%] md:w-[80%] lg:w-[70%] min-h-[200px] max-h-[90%] px-[10px] md:px-[50px] lg:px-[100px] bg-white py-[20px] md:py-[30px] lg:py-[50px] flex absolute left-[5%] right-[5%] md:left-[10%] md:right-[10%] lg:left-[15%] lg:right-[15%]  mt-[30px] mb-[30px] bg-neutral-0"
      >
        <div className="relative min-h-[150px] overflow-scroll overflow_scroll_container w-full">
          <div className="py-4">
            <div className="w-full mb-3 py-1">
              <p className="text-xl">Ер нь?</p>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur. Quis non nibh arcu arcu
                facilisis. Arcu diam condimentum diam libero ac aliquam
                scelerisque sed.
              </p>
            </div>
          </div>
        </div>
      </Modal> */}
    </div>
  );
}
