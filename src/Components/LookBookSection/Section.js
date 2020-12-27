import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const GridFlex = styled.div`
  width: 1260px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
`;

const Section = ({ children }) => (
  <Container>
    <GridFlex>
      <Grid>{children}</Grid>
    </GridFlex>
  </Container>
);

export default Section;
