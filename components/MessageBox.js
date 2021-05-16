import React from "react";
import styled from "styled-components/native";

export default function MessageBox(props) {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Icon src={props.src} />
          <Title>{props.title || "Quote"}</Title>
        </HeaderContainer>

        <ContentContainer>
          <Content>{props.content || "Be like water my friend"}</Content>
          <Caption>{props.caption || "Sang Le"}</Caption>
        </ContentContainer>
      </Container>
    </>
  );
}

const Container = styled.View`
  margin-bottom: 16px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  background-color: blueviolet;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Icon = styled.Image.attrs({ source: require("../public/Smartie.png") })`
  width: 16px;
  height: 16px;
`;

const Title = styled.Text`
  color: white;
  margin-left: 10px;
`;

const ContentContainer = styled.View`
  background-color: white;
  padding: 10px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const Content = styled.Text``;

const Caption = styled.Text`
  color: grey;
  padding-top: 6px;
`;
