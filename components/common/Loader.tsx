import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 bottom-0 right-0">
      <div className="relative flex h-full gap-x w-32 justify-between items-center">
        <div className="w-[32px] h-[32px] rounded-full bg-primary-100 animate-bounce-1" />
        <div className="w-[32px] h-[32px] rounded-full bg-primary-200 animate-bounce-2" />
        <div className="w-[32px] h-[32px] rounded-full bg-primary-300 animate-bounce-3" />
      </div>
    </div>
  );
};

export default Loader;
