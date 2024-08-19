import styled from "styled-components";

const ProjectContainer = styled.section`
  padding: 7.5rem 0;
  h1 {
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
  }
  p {
    max-width: 54ch;
    text-align: center;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.75rem;
`;

const ProjectView = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>PROJECTS</h1>
        <p>
          Here are some projects that highlight my passion for visual design and
          creating great web experiences products and brands.
        </p>
      </ProjectHeader>
    </ProjectContainer>
  );
};

export default ProjectView;
