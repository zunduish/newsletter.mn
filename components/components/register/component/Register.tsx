import Image from "next/image";

export default function Register() {
  return (
    <div className="w-full">
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
  );
}
