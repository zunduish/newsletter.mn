import TheFutureTextContainer from "../../components/profile/thefuturetext/containers/TheFutureTextContainer";
import NewContainer from "../../components/profile/new/containers/NewContainer";
import ListContainer from "../../components/profile/lists/containers/ListContainer";
import RegisterContainer from "../../components/profile/register/containers/RegisterContainer";

export default function NewsletterProfile() {
  return (
    <div className="container_custom lg:container mx-auto py-[24px] mb-[24px] ">
      <TheFutureTextContainer />

      <div className="block lg:hidden">
        <NewContainer />
      </div>
      <div className="w-full grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="hidden lg:block ">
            <NewContainer />
          </div>
          <ListContainer />
        </div>

        {/* THIRTH DIV */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 my-[24px]">
          <RegisterContainer />
        </div>
      </div>
    </div>
  );
}
