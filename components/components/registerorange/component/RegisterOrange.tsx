import Image from "next/image";

export default function RegisterOrange() {
  return (
    <div className="w-full bg-orange-500 rounded-xl p-[24px]">
      <div className="w-full border-b-[1px] border-neutral-0 pb-[10px]">
        <p className="text-[16px] leading-[23px] md:text-[20px] md:leading-[29px] lg:text-[24px] lg:leading-[35px] text-neutral-0 font-bold text-center">
          The Future
        </p>
      </div>

      <form>
        <div className="w-[70%] m-auto border border-neutral-100 rounded-lg flex p-[5px]  mt-[15px] bg-neutral-0">
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
        <div className="w-[70%] m-auto border border-neutral-100 rounded-lg flex p-[5px] mt-[15px]  bg-neutral-0">
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
        <div className="w-full flex items-center mt-[15px] ">
          <input
            type="submit"
            value={"Бүртгүүлэх"}
            className="min-w-[100px] bg-orange-50 text-12px px-[16px] py-[4px] md:text-14px md:px-[20px] md:py-[8px] lg:text-16px lg:px-[24px] lg:py-[12px] rounded-lg text-orange-200 m-auto"
          />
        </div>
      </form>
    </div>
  );
}
