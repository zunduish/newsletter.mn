import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-[56px] border-b-2">
      <div className="w-full -mt-2 md:-mt-4 relative ">
        <div className="absolute inset-y-0 left-10"></div>
      </div>
    </div>
  );
}
