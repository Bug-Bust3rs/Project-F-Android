import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useLogin } from '../../../hooks/useLogin'
import { Link } from 'expo-router';
import { useAuthContext } from '../../../hooks/useAuthContext'
import { Redirect } from "expo-router";
import { router } from 'expo-router';


export default function login() {
  const { login, error, isSucess, isLoading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toogle, setToogle] = useState(true);
  const [validate, setValidate] = useState(false);


  const { state } = useAuthContext();

  if (state.user) {
    return <Redirect href={'/home'} />
  }

  const handleLogin = async () => {
    if (!email || !password) {
      setValidate(true);
      setTimeout(() => {
        setValidate(false)
      }, 3000)
      return;
    }
    router.push('/home')
    // await login({ email, password });


  };
  return (
    <View className=' '>


      <View className='w-[90%] my-auto mx-auto min-h-full flex justify-center'>
        <View className='mt-20 flex gap-5 mb-20'>
          <View>
            <View className='flex flex-row gap-2'>
              <Text className='font-medium text-4xl text-rose-400'>Welcome</Text>
              <Text className='font-medium text-4xl text-cyan-400'>User !</Text>

            </View>
            <Text className='text-gray-500'>Sign up or Login to your account.</Text>

          </View>
          <View className='bg-slate-200 p-3 rounded-2xl flex flex-row '>

            <Text onPress={() => setToogle(!toogle)} className={toogle ? 'flex-1 text-center py-3 px-2 rounded-2xl bg-rose-400 text-sm font-normal text-white' : 'flex-1 text-center py-3 px-2 rounded-2xl bg-slate-200 text-rose-600 text-sm font-medium'}>
              Login
            </Text>
            <Text onPress={() => setToogle(!toogle)} className={!toogle ? 'flex-1 text-center py-3 px-2 rounded-2xl bg-rose-400 text-sm font-normal text-white' : 'flex-1 text-center py-3 px-2 rounded-2xl bg-slate-200 text-rose-600 text-sm font-medium'}>
              Register
            </Text>
          </View>
        </View>


   

        {
          toogle &&
          <View>

            <View className='flex gap-5'>
              <View>

                <Text className='text-base font-normal mb-1 ml-2'>Email Address</Text>
                <TextInput
                  className='px-3 py-3 bg-slate-200 text-base rounded-2xl'
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View>
                <Text className='text-base font-normal mb-1 ml-2'>Password</Text>
                <TextInput
                  className='px-3 py-3 bg-slate-200 text-base rounded-2xl'
                  placeholder="Password"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            <TouchableOpacity className='bg-cyan-400 px-2 py-3 rounded-2xl hover:bg-rose-400 cursor-pointer mb-[20px]'>
              <Text className='text-center font-bold text-white text-lg'>Register</Text>
            </TouchableOpacity>
          </View>
        }
        {
          !toogle &&
          <View>

            <View className='flex gap-5'>
              <View>

                <Text className='text-base font-normal mb-1 ml-2'>Email Address</Text>
                <TextInput
                  className='px-3 py-3 bg-slate-200 text-base rounded-2xl'
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View>
                <Text className='text-base font-normal mb-1 ml-2'>Password</Text>
                <TextInput
                  className='px-3 py-3 bg-slate-200 text-base rounded-2xl'
                  placeholder="Password"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            <TouchableOpacity className='bg-cyan-400 px-2 py-3 rounded-2xl hover:bg-rose-400 cursor-pointer mb-[20px]'>
              <Text className='text-center font-bold text-white text-lg'>Register</Text>
            </TouchableOpacity>
          </View>
        }

      </View>
    </View>
  )
}