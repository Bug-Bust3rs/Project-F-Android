import { Stack } from "expo-router";
import { user } from "../constants/Colors";
import { useEffect } from "react";
import { AuthContextProvider } from "../context/Authcontext";

export default function RootLayout() {
  useEffect(() => {}, [user]);
  return (
    <AuthContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"auth"} />
        <Stack.Screen name={"(tabs)"} />
        {/* <Stack.Screen name={user ? "auth" : "(tabs)"} /> */}
      </Stack>
    </AuthContextProvider>
  );
}
