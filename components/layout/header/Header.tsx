import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full border-b border-neutral-100">
      <div className="container_custom h-[56px] mx-auto flex px-[24px]">
        <div className="items-center flex">
          <Image
            width={23}
            height={26}
            src="/images/sys_images/unread_logo.svg"
            alt=""
          />
          <Image
            width={23}
            height={26}
            src="/images/sys_images/header_sm.svg"
            alt=""
            className="ml-[10px] w-[250px]"
          />
          {/* <span className="ml-3 font-bold "> UNREAD </span>
          <span className="ml-1">|</span>
          <span className="ml-1"> Newsletter</span> */}
        </div>
      </div>
    </div>
  );
}
