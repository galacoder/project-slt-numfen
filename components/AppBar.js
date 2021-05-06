import * as React from "react";
import { Appbar } from "react-native-paper";

const AppBar = () => {
  return (
    <Appbar.Header>
      <Appbar.Content
        title="Thần Số Học"
        subtitle="Bí Mật Làm Giàu X.0"
        style={{ alignItems: "center" }}
      />
    </Appbar.Header>
  );
};

export default AppBar;
