import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Register() {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data: any) => console.log(data);
  return (
    <div className="w-full py-[24px] px-[10px]">
      <div className="w-full">
        <Image
          src="/images/rocket.png"
          width={76}
          height={76}
          alt=""
          className="w-[76px] h-[76px] sm:m-auto md:m-0 lg:m-0"
        />
      </div>
      <p className="text-[16px] leading-[23px] font-bold mt-4">The Future</p>
      <p className="text-[12px] leading-[16px] font-normal text-neutral-500 mt-2">
        Lorem ipsum dolor sit amet consectetur. Ridiculus tristique risus neque
        pellentesque felis euismod bibendum. Mattis sed facilisi lorem arcu sit
        vel nunc id. Consequat etiam pellentesque ante nulla at convallis. Nulla
        malesuada mi faucibus parturient neque arcu nibh consequat porta.
        <br />
        Lorem ipsum dolor sit amet consectetur. Ridiculus tristique risus neque
        pellentesque felis euismod bibendum. Mattis sed facilisi lorem arcu sit
        vel nunc id. Consequat etiam pellentesque ante nulla at convallis. Nulla
        malesuada mi faucibus parturient neque arcu nibh consequat porta.
      </p>
      <div className="w-full border-b-[1px] border-neutral-100 pb-[24px] mb-[24px]">
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
      </div>

      {/* profile */}
      <div className="border border-neutral-100 rounded-xl w-full p-[24px] mt-[20px]">
        <div className="w-full">
          <Image
            src="/images/avatar.png"
            width={82}
            height={82}
            alt=""
            className="rounded-full sx:m-auto sm:m-auto md:m-0 lg:m-0"
          />
        </div>
        <div className="w-full">
          <p className="text-[16px] leading-[20px] font-bold  mt-3">
            Ц.Мажигсүрэн
          </p>
          <p className="text-[12px] leading-[16px] flex mt-2 text-neutral-400">
            Content Writer <span>&nbsp; | &nbsp; </span>
            <span className="text-orange-500 font-bold"> Unread </span>
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
