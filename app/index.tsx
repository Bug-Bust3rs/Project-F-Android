import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Index() {

  return <Redirect href={"/auth/login"} />;
}
