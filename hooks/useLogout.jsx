import { useAuthContext } from "./useAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = async () => {
        try {

            await AsyncStorage.removeItem("user");
            dispatch({ type: "LOGOUT" });
            router.replace('/main/splash')

        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return { logout };
};
