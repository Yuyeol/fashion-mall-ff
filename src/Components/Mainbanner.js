import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: -10;
`;

const BannerImg = styled.img`
  width: 100%;
`;

const MainBanner = ({ banner }) => (
  <Container>
    <BannerImg src={banner} />
  </Container>
);

export default MainBanner;
