import TheFutureTextContainer from "../../components/profile/thefuturetext/containers/TheFutureTextContainer";
import NewContainer from "../../components/profile/new/containers/NewContainer";
import ListContainer from "../../components/profile/lists/containers/ListContainer";
import ProfileContainer from "../../components/profile/profile/containers/ProfileContainer";

type Props = {
  data: any;
};

export default function NewsletterProfile(props: Props) {
  const { data } = props;

  return (
    <div className="container_custom lg:container mx-auto py-[24px] mb-[24px] ">
      <TheFutureTextContainer id={data[0]?.topicId} />
      <div className="block lg:hidden">
        <NewContainer list_data={data} />
      </div>
      <div className="w-full grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="newsletter_top">
            <div className="newcontainer hidden">
              <NewContainer list_data={data} />
            </div>
          </div>
          <ListContainer list_data={data} />
        </div>

        {/* THIRTH DIV */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 my-[24px]">
          <ProfileContainer
            id={data[0]?.topicId}
            uid={data[0].createdUser._id}
          />
        </div>
      </div>
    </div>
  );
}
