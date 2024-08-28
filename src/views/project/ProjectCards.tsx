import StackedCards, {
  StackedCardsProps,
} from "../../components/stackedCards/StackedCards";
import { classnames } from "../../lib/helpers";
import ProjectCard from "./ProjectCard";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import { Project, projectGetAllProjects } from "../../store/projectSlice";

const ProjectCards = () => {
  const projects = useAppSelector(projectGetAllProjects);

  const projectRenderFunction: StackedCardsProps<Project>["cardRenderFunction"] =
    (project, index, ref) => {
      return (
        <ProjectCard
          {...project}
          ref={ref}
          className={classnames({
            "bg-white": index % 2 === 0,
            "bg-beige": index % 2 !== 0,
          })}
        />
      );
    };

  return (
    <StackedCards cards={projects} cardRenderFunction={projectRenderFunction} />
  );
};

export default ProjectCards;
