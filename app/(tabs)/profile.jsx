import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useLogout } from '../../hooks/useLogout';

export default function profile() {
  const { state } = useAuthContext();
  const {logout} = useLogout();

  return (
    <View className='flex h-screen justify-center items-center'>
      <Text className='text-2xl font-bold text-indigo-500'>Name - {state.user?.name}</Text>
      <Text className='text-2xl font-bold text-indigo-500'>Email - {state.user?.email}</Text>
      <Pressable onPress={logout}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  )
}