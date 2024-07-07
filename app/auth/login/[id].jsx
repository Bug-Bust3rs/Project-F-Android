import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useVerifyLogin } from '../../../hooks/useVerifyLogin'
import { useLocalSearchParams } from 'expo-router';


export default function login() {

    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState(false);
    const { id } = useLocalSearchParams();
    const { isLoading, isSucess, error, verify } = useVerifyLogin();
    const handleLogin = async () => {
        if (!email) {
            setValidate(true);
            setTimeout(() => {
                setValidate(false)
            }, 3000)
            return;
        }
        try {
            await verify({ id, email })

        } catch (error) {
            console.warn(error)
        }

    };
    return (
        <View className='flex-1 justify-center items-center bg-white'>



            <View className='w-[90%] mt-[70px] backdrop-blur-3xl'>

                <Image className='w-[100%] mx-auto h-[50%]' source={require('../../../assets/images/OTP.jpg')} />

                <View className='flex justify-center item-center gap-[20px] mb-[25px]'>
                    <View className='flex flex-row justify-center gap-2 mb-[17px]'>
                        <Text className='text-center text-3xl font-semibold '>Enter Your</Text>
                        <Text className='text-center text-3xl text-indigo-500 font-bold '>OTP</Text>
                    </View>

                    <TextInput
                        className='px-3 py-3 bg-slate-200 text-base3 rounded-2xl'
                        placeholder="Enter OTP"
                        value={email}
                        onChangeText={setEmail}
                    />

                </View>
                <TouchableOpacity onPress={handleLogin} className='bg-indigo-500 px-2 py-2.5 rounded-2xl hover:bg-rose-400 cursor-pointer mb-[20px] flex flex-row justify-center gap-1'>
                    {isLoading ? <ActivityIndicator color={'#ffffff'} size={'large'} /> : <Text className='text-center font-bold text-white text-lg'>Verify OTP</Text>}
                </TouchableOpacity>
                <View className='flex flex-row justify-center gap-1 mb-4'>

                    <Text className='text-center '>Forgot Password?</Text>
                    <Text className='text-center text-indigo-500'>Change password</Text>
                </View>

                {
                    isSucess && <View className='flex mt-2 bg-green-100 py-2 rounded-xl flex-row items-center justify-center gap-1'>
                        <Text className='text-center text-green-600 font-semibold'>OTP Send Successfull!</Text>
                    </View>
                }

                {
                    validate && <View className='flex bg-yellow-100 py-2 rounded-xl items-center flex-row justify-center gap-1'>
                        <Text className='text-center text-yellow-600 font-semibold'>Enter All Details!</Text>
                    </View>
                }
                {
                    error && <View className='flex bg-red-100 py-2 rounded-xl flex-row items-center justify-center gap-1'>
                        <Text className='text-center text-red-600 font-semibold'>Login Error!</Text>
                    </View>
                }



            </View>

        </View>
    )
}