import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div``;
const SLink = styled(Link)`
  margin-top: 40px;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
`;
const Image = styled.img``;

const LogoBlock = () => (
  <Logo>
    <ImageBox>
      <SLink to="/fashion-mall-ff">
        <Image src="http://app-storage-edge-004.cafe24.com/bannermanage2/firstfloor/2020/08/03/58ad38fdba5fb688217bb1b36c6cefa5.png" />
      </SLink>
    </ImageBox>
  </Logo>
);

export default LogoBlock;
