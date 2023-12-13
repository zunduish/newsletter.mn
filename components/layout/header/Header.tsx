import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <Link href={"/"}>
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
          </div>
        </div>
      </div>
    </Link>
  );
}
