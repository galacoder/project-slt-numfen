// *,
// *::after,
// *::before {
//     margin: 0;
//     padding: 0;
//     box-sizing: inherit;
// }

// html {
//     // This defines what 1rem is
//     font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

//     @include respond(tab-land) { // width < 1200?
//         font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
//     }

//     @include respond(tab-port) { // width < 900?
//         font-size: 50%; //1 rem = 8px, 8/16 = 50%
//     }

//     @include respond(big-desktop) {
//         font-size: 75%; //1rem = 12, 12/16
//     }
// }

// body {
//     box-sizing: border-box;
//     padding: 3rem;

//     @include respond(tab-port) {
//         padding: 0;
//     }
// }

// ::selection {
//     background-color: $color-primary;
//     color: $color-white;
// }

// export const fonts = {
//   body: "Oswald_400Regular",
//   heading: "Lato_400Regular",
//   monospace: "Oswald_400Regular",
// };

// export const fontWeights = {
//   regular: 400,
//   medium: 500,
//   bold: 700,
// };

// export const fontSizes = {
//   caption: "12px",
//   button: "14px",
//   body: "16px",
//   title: "20px",
//   h5: "24px",
//   h4: "34px",
//   h3: "45px",
//   h2: "56px",
//   h1: "112px",
// };

import styled from "styled-components/native";

export const H1 = styled.Text`
  font-weight: bold;
  font-size: 60px;
  line-height: 70px;

  @media (max-width: 414px) {
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
  }
`;

export const H2 = styled.Text`
  font-weight: bold;
  font-size: 40px;
  @media (max-width: 414px) {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
  }
`;

export const H3 = styled.Text`
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 414px) {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
  }
`;

export const BodyIntro = styled.Text`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;

export const BodyMain = styled.Text`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`;

export const MediumText = styled.Text`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
`;

export const Caption = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export const Caption2 = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const SmallText = styled.Text`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;

export const SmallText2 = styled.Text`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`;
