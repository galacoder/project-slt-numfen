import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import HTML from "react-native-render-html";

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// export async function getStaticProps() {
//   const res = await fetch(
//     "https://potion-api.now.sh/html?id=0cb628857f3c4c77bf7f9a879a6ec21d"
//   );
//   const text = await res.text();

//   return {
//     props: {
//       text,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every second
//     revalidate: 10, // In seconds
//   };
// }

export default function NotionPage() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const contentWidth = useWindowDimensions().width;

  useEffect(() => {
    fetch("https://potion-api.now.sh/html?id=0cb628857f3c4c77bf7f9a879a6ec21d")
      .then((response) => response.text())
      .then((text) => setData(text))
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
          <HTML source={{ html: data }} contentWidth={contentWidth} />
        </ScrollView>
      )}
    </View>
  );
}
