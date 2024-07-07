import { useState } from "react";
import axios from "axios";
import { router } from 'expo-router';

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    setError(false);
    try {
      await axios.post(
        `https://carree.vercel.app/api/v0.1/auth/login`,
        {
          email,
          password,
        }
      );

      setIsSuccess(true);
      setIsLoading(false);
      router.replace(`/auth/login/${email}`);
    } catch (error) {
      console.error("Login error:", error);
      setError(true);
      setIsSuccess(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return { login, error, isLoading, isSuccess };
};
