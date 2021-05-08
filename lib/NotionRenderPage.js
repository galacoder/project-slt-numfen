import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import { NotionRenderer } from "./notion-renderer/renderer";

export default function NotionPageAdvance() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const contentWidth = useWindowDimensions().width;
  useEffect(() => {
    fetch(
      "https://notion-api.splitbee.io/v1/page/0d71a213ad3943a0b6fac23be9db7d11"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      // .then((json) => console.error(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <NotionRenderer blockMap={data} />
        </ScrollView>
      )}
    </View>
  );
}
