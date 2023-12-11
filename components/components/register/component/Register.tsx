import SubscribeForm from "@/components/common/SubscribeForm";
import Image from "next/image";
import Script from "next/script";
import React, { useState } from "react";
import Modal from "react-modal";

export default function Register({
  formSubmitted,
  formDetail,
  getFormValues,
  setFormSubmitted,
}: any) {
  const fields = formDetail?.fields || [];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const afterOpenModal = () => {};
  const [modalArticlesOpen, setModalArticlesOpen] = React.useState(false);
  const openModalArticles = () => {
    setFormSubmitted(true);
    setModalArticlesOpen(true);
  };
  const closeModalArticles = () => {
    location.reload();
    // setModalArticlesOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getFormValues(name, email);
  };
  return (
    <div className="w-full">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div
            key={fields[0]?._id}
            className="w-full border border-neutral-100 rounded-lg flex p-[5px]  mt-[15px]"
          >
            <Image
              src="/images/sys_images/reg_contact_logo.svg"
              width={18}
              height={18}
              alt=""
              className="ml-[5px]"
            />
            <input
              type={fields[0]?.type}
              value={name}
              className="w-full outline-none text-[16px] ml-[10px] text-neutral-500"
              placeholder={fields[0]?.text}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            key={fields[1]?._id}
            className="w-full border border-neutral-100 rounded-lg flex p-[5px]  mt-[15px]"
          >
            <Image
              src="/images/sys_images/reg_contact_logo.svg"
              width={18}
              height={18}
              alt=""
              className="ml-[5px]"
            />
            <input
              type={"email"}
              value={email}
              className="w-full outline-none text-[16px] ml-[10px] text-neutral-500"
              placeholder={fields[1]?.text}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center">
            <input
              onClick={openModalArticles}
              type="submit"
              value={"Бүртгүүлэх"}
              className="min-w-[100px] bg-orange-500 cursor-pointer text-neutral-0 text-12px px-[16px] py-[4px] md:text-14px md:px-[20px] md:py-[8px] lg:text-16px lg:px-[24px] lg:py-[12px] rounded-lg mt-[12px] "
            />
          </div>
        </form>
      ) : (
        <p className="text-[14px] text-default-green mt-[10px]">Тавтай морил</p>
      )}

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
                src={"../../images/sys_images/success.svg"}
                alt=""
                width={50}
                height={50}
                className="rounded-lg w-[50%]"
              />
              <p className="text-xl  mt-[40px] text-[16px] md:text-[24px] lg:text-[28px] font-bold text-default-green">
                Тавтай морил
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[16px]  mt-[10px]">
                Мэдлэгийг тань цэнэглэх товхимол тан дээр очиход бэлэн боллоо,
                баяр хүргэе!
              </p>
              <button
                onClick={closeModalArticles}
                className="text-[16px] border py-[5px] px-[15px] rounded-lg border-neutral-100 mt-[100px] font-semibold"
              >
                <span>Буцах</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
