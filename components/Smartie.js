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
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Image = styled.ImageBackground.attrs({
  source: require("../public/Smartie.png"),
})`
  width: 224px;
  height: 240px;
  transform: scale(0.4);
`;
