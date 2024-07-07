import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ tabBarLabel: "Home", tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} /> }} />
      <Tabs.Screen name="explore" options={{ tabBarLabel: "Explore", tabBarIcon: ({ color }) => <AntDesign name="rocket1" size={24} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile", tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} /> }} />
    </Tabs>
  );
}
