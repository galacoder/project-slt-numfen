import * as React from "react";
import styled from "styled-components/native";

export default function Smartie() {
  return (
    <>
      <Container>
        <Image />
      </Container>
    </>
  );
}

const Container = styled.View`
  width: 168px;
  height: 168px;
`;

const Image = styled.ImageBackground.attrs({
  source: require("../public/Smartie.jpg"),
})`
  width: 60px;
  height: 60px;
  align-self: center;
`;
