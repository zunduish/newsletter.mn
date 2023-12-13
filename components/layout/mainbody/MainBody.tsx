import DifinitionContainer from "../../definition/containers/DefinitionContiner";
import FeaturedContainer from "../../featured/containers/FeaturedContainer";
import CategoredNewsContainer from "../../categorednews/containers/CategoredNewsContainer";
export default function MainBody() {
  return (
    <div className="container_custom lg:container mx-auto">
      <DifinitionContainer />
      <FeaturedContainer />
      <CategoredNewsContainer />
    </div>
  );
}
