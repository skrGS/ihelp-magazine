import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { UserStore } from "./src/contexts/UserContex";
import MyStackNavigator from "./src/navigation/MyStackNavigator";

function App() {
  return (
    <NavigationContainer>
      <UserStore>
        <MyStackNavigator />
      </UserStore>
    </NavigationContainer>
  );
}

export default App;
