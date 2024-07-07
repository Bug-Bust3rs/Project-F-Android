import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const useVerifyLogin = () => {

    const [error, setError] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [isSucess, setisSucess] = useState(false);
    const { dispatch } = useAuthContext();

    const verify = async ({ id, email }) => {

        setisLoading(true);
        setError(false);


        try {
            const response = await axios.get(
                `https://carree.vercel.app/api/v0.1/auth/verify-otp/${id}/?token=${email}`
            );


            await AsyncStorage.setItem("user", JSON.stringify(response.data));
            dispatch({ type: "LOGIN", payload: response.data });
            setisSucess(true);
            setisLoading(false);
            router.replace(`/home`);
        } catch (error) {
            console.error("Login error:", error);
            setError(true);
            setisSucess(false);
            setTimeout(() => {
                setisLoading(false);
            }, 3000);
        }
    };
    return { verify, error, isLoading, isSucess };
};