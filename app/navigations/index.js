import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import { color } from "../theme";
import TabStack from "./TabStack";
import MyPageScreen from "../screens/MyPageScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailFeedScreen from "../screens/DetailFeedScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{
          cardStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Tab"
          component={TabStack}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />

        <Stack.Screen
          name="DetailFeed"
          component={DetailFeedScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
