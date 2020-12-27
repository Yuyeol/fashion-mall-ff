import CurrLocation from "Components/CurrLocation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const LocationBox = styled.div``;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutImg = styled.img``;

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("COMPANY");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <LocationBox>
        <CurrLocation location={location} />
      </LocationBox>
      <ImgBox>
        <AboutImg src="http://firstfloor.cafe24.com/web/upload/brand%20introduce.jpg" />
      </ImgBox>
    </Container>
  );
};

export default About;
