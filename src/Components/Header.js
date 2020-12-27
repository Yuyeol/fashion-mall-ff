import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoBlock from "./Headers/LogoBlock";
import NavBar from "./Headers/NavBar";
import TopBar from "./Headers/TopBar";

const Container = styled.div``;

export const Header = () => {
  const [fixNav, setFixNav] = useState([]);

  const handleScroll = (e) => {
    const {
      srcElement: {
        scrollingElement: { scrollTop },
      },
    } = e;
    if (scrollTop >= 150) {
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      <TopBar fixNav={fixNav} />
      <LogoBlock />
      <NavBar fixNav={fixNav} />
    </Container>
  );
};
