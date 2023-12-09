import React from "react";

const Card = () => {
  // home -> ontslox dugaaruud LOADER
  return (
    <div className="w-full">
      <div className="w-full p-[24px] rounded-2xl grid md:grid-cols-2 sm:grid-cols-1 gap-[24px] bg-neutral-50">
        <div className="w-full flex animate-pulse">
          <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px] bg-neutral-100">
            <div
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="w-full">
            <div className="w-[50%] h-[25px] bg-neutral-100 rounded-[4px] mb-[10px]"></div>
            <div className="w-[70%] h-[18px] bg-neutral-100 rounded-[4px] mb-[10px]"></div>
            <div className="w-[70%] h-[18px] bg-neutral-100 rounded-[4px]"></div>
          </div>
        </div>
        <div className="w-full flex animate-pulse">
          <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px] bg-neutral-100">
            <div
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="w-full">
            <div className="w-[50%] h-[25px] bg-neutral-100 rounded-[4px] mb-[10px]"></div>
            <div className="w-[70%] h-[18px] bg-neutral-100 rounded-[4px] mb-[10px]"></div>
            <div className="w-[70%] h-[18px] bg-neutral-100 rounded-[4px]"></div>
          </div>
        </div>
        <div className="w-full flex animate-pulse">
          <div className="w-[73px] h-[40px] lg:w-[168px] lg:h-[94px] md:w-[86px] md:h-[48px] rounded-lg mr-[24px] bg-neutral-100">
            <div
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="w-full">
            <div className="w-[50%] h-[25px] bg-neutral-100 rounded-[4px] mb-[10px]"></div>
            <div className="w-[70%] h-[18px] bg-neutral-100 rounded-[4px] mb-[10px]"></div>
            <div className="w-[70%] h-[18px] bg-neutral-100 rounded-[4px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CatogeredCard = () => {
  // home -> categored LOADER
  return (
    <div className="w-full px-[24px] mt-[15px] animate-pulse">
      <div className="w-[300px] h-[30px] bg-neutral-50 rounded-md mb-[24px]"></div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[24px] pb-[50px] border-b-[1px] border-neutral-100">
        {/* ************************************************************************************************************ */}
        <div className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 ">
          <div className=" w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
            <div className=" w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
              <div className="lg:block hidden absolute w-[150px] h-[30px] m-[16px] rounded-[16px] bg-neutral-100  text-center"></div>
              <div
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-lg lg:rounded-none lg:rounded-t-lg  bg-neutral-50"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative mt-0 lg:mt-3">
            <div className="w-[80%] h-[40px] bg-neutral-50 rounded-md"></div>
            <div className="h-[180px] overflow-hidden">
              <div className="w-[50%] h-[30px] bg-neutral-50 rounded-md mt-[15px]"></div>
              <div className="w-[70%] h-[30px] bg-neutral-50 rounded-md mt-[15px]"></div>
            </div>
            <div className="w-full flex">
              <div>
                <div className="w-[30%] h-[30px] bg-neutral-50 rounded-md left-[10px] bottom-[5px] lg:bottom-[20px] absolute"></div>
              </div>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
                <div className=" rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]" />
              </button>
            </div>
          </div>
        </div>
        {/* ************************************************************************************************************ */}
        <div className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 ">
          <div className=" w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
            <div className=" w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
              <div className="lg:block hidden absolute w-[150px] h-[30px] m-[16px] rounded-[16px] bg-neutral-100  text-center"></div>
              <div
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-lg lg:rounded-none lg:rounded-t-lg  bg-neutral-50"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative mt-0 lg:mt-3">
            <div className="w-[80%] h-[40px] bg-neutral-50 rounded-md"></div>
            <div className="h-[180px] overflow-hidden">
              <div className="w-[50%] h-[30px] bg-neutral-50 rounded-md mt-[15px]"></div>
              <div className="w-[70%] h-[30px] bg-neutral-50 rounded-md mt-[15px]"></div>
            </div>
            <div className="w-full flex">
              <div>
                <div className="w-[30%] h-[30px] bg-neutral-50 rounded-md left-[10px] bottom-[5px] lg:bottom-[20px] absolute"></div>
              </div>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
                <div className=" rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg border-neutral-100  flex lg:grid p-[20px] lg:p-0 ">
          <div className=" w-[60px] h-[60px] lg:w-full lg:h-[320px] sm:rounded-lg md:rounded-lg lg:sm:rounded-none lg:rounded-t-lg">
            <div className=" w-[60px] h-[60px] lg:w-full lg:h-[100%] rounded-none sm:rounded-lg md:rounded-lg lg:rounded-t-lg relative ">
              <div className="lg:block hidden absolute w-[150px] h-[30px] m-[16px] rounded-[16px] bg-neutral-100  text-center"></div>
              <div
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-lg lg:rounded-none lg:rounded-t-lg  bg-neutral-50"
              />
            </div>
          </div>
          <div className="pl-3 lg:px-3 lg:pb-[20px] h-[290px] w-full relative mt-0 lg:mt-3">
            <div className="w-[80%] h-[40px] bg-neutral-50 rounded-md"></div>
            <div className="h-[180px] overflow-hidden">
              <div className="w-[50%] h-[30px] bg-neutral-50 rounded-md mt-[15px]"></div>
              <div className="w-[70%] h-[30px] bg-neutral-50 rounded-md mt-[15px]"></div>
            </div>
            <div className="w-full flex">
              <div>
                <div className="w-[30%] h-[30px] bg-neutral-50 rounded-md left-[10px] bottom-[5px] lg:bottom-[20px] absolute"></div>
              </div>
              <button className="right-[0px] bottom-[-5px] lg:right-[10px] lg:bottom-[10px] absolute">
                <div className=" rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const NewsLetterDetail = () => {
  // home -> ontslox dugaaruud LOADER
  return (
    <div className="sx:w-full md:w-[722px] lg:w-[744px] mx-auto px-[15px] py-[24px] lg:py-[10px] mb-[24px] animate-pulse">
      <div className="w-full h-[300px] rounded-lg bg-neutral-50"></div>
      <div className="w-full mt-[15px]">
        <div className="flex items-center">
          <div className="w-[32px] h-[32px]" />
          <div className="ml-[10px] bg-neutral-50 w-[100px] h-[16px] rounded-lg"></div>
        </div>
        <div className="w-full pb-[20px] border-b-[1px] border-neutral-50">
          <div className="bg-neutral-50 w-[30%] h-[25px] rounded-lg mt-[15px]"></div>
        </div>
      </div>
      <div className="w-full mt-[30px]">
        <div className="bg-neutral-50 w-[70%] h-[20px] rounded-lg mt-[15px]"></div>
        <div className="bg-neutral-50 w-[30%] h-[20px] rounded-lg mt-[15px]"></div>
        <div className="bg-neutral-50 w-[50%] h-[20px] rounded-lg mt-[15px]"></div>
      </div>
    </div>
  );
};
const NewsLetterList = () => {
  return (
    <div className="container_custom lg:container mx-auto py-[24px] mb-[24px] ">
      <div className="w-full m-auto px-[10px]">
        <div className="w-full border-b border-neutral-50 md:py-[70px]  sm:py-[50px] py-[50px]">
          <div className="w-[40%] h-[80px] bg-neutral-50 m-auto rounded-xl "></div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className=" mt-[15px] rounded-xl md:min-h-[253px] lg:min-h-[272px] lg:w-[70%] pt-[50px] mb-[24px] pb-[24px] bg-neutral-50"></div>
      </div>
      <div className="w-full grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="newsletter_top">
            <div className="newcontainer hidden">
              <div className="w-full px-[10px]">
                <div className="w-[100px] h-[20px] bg-neutral-50 rounded-lg mt-[25px]"></div>
                <div className=" mt-[15px] rounded-xl md:min-h-[353px] lg:min-h-[372px] w-full pt-[50px] mb-[24px] pb-[24px] bg-neutral-50"></div>
              </div>
            </div>
          </div>{" "}
          <div className="w-full grid grid-cols-1 gap-0 lg:flex  border-neutral-100 pb-[24px] mb-[24px] px-[10px]">
            <div className="w-[50%] sx:h-[100px] sm:h-[100px] md:h-[100px] lg:w-[168px] ">
              <div
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                className="object-cover bg-neutral-50 rounded-lg"
              />
            </div>
            <div className="lg:pl-[20px] w-full mt-[10px] lg:mt-0">
              <div className="w-[30%] h-[25px] bg-neutral-50 rounded-lg mb-[10px]" />
              <div className="w-[60%] h-[25px] bg-neutral-50 rounded-lg mb-[10px]" />
              <div className="w-[40%] h-[25px] bg-neutral-50 rounded-lg " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const DefaultLoader = () => {
  // home -> categored DEFAULT LOADER
  return <div className="w-full h-[100px] bg-neutral-50 mt-[15px]"></div>;
};
const Loader = ({ type }: any) => {
  switch (type) {
    case "card":
      return <Card></Card>;
    case "CatogeredCard":
      return <CatogeredCard></CatogeredCard>;
    case "NewsLetterDetail":
      return <NewsLetterDetail></NewsLetterDetail>;
    case "NewsLetterList":
      return <NewsLetterList></NewsLetterList>;
    default:
      return <DefaultLoader></DefaultLoader>;
  }
};

export default Loader;

{
  /* <div className={classes}></div> */
}
