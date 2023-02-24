import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import { AppProps } from "./App.types";

export const App: React.FC<AppProps> = (props) => {

  React.useEffect(() => {
    props.dispatchInit();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Text>
          Hello world! Hello!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};


