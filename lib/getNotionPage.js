import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { NotionRenderer } from "react-notion";

export default function NotionPage() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://notion-api.splitbee.io/v1/page/0d71a213ad3943a0b6fac23be9db7d11"
    )
      .then((response) => response.json())
      // .then((json) => setData(json))
      .then((json) => console.error(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : <NotionRenderer blockMap={data} />}
    </ScrollView>
  );
}
