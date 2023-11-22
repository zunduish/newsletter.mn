import DifinitionContainer from "../../components/definition/containers/DefinitionContiner";
import FeaturedContainer from "../../components/featured/containers/FeaturedContainer";
import CategoredNewsContainer from "../../components/categorednews/containers/CategoredNewsContainer";
export default function MainBody() {
  return (
    <div className="container_custom lg:container mx-auto">
      <DifinitionContainer />
      <FeaturedContainer />
      <CategoredNewsContainer />
    </div>
  );
}
