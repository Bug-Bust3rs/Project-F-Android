import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
export default function register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: Implement login logic
    };
    return (
        <View className='flex justify-center items-center gap-0 mt-[350px]'>

            <View className='bg-indigo-500 rounded-full top-[-440]  h-[800px] w-[800px] absolute' />

            <Image className='w-[280px] absolute top-[-300] left-[55] text-center mx-auto h-[280px]' source={require('../../../assets/images/register.png')} />


            <View className='w-[90%] mt-[500px] bg-white px-5 py-9 shadow-2xl rounded-3xl'>
                <View className='flex flex-row justify-center gap-2 mb-[25px]'>
                    <Text className='text-center text-3xl font-semibold '>Create Your</Text>
                    <Text className='text-center text-3xl text-indigo-500 font-bold '>Account</Text>
                </View>

                <View className='flex justify-center item-center gap-[20px] mb-[25px]'>
                    <TextInput
                        className='px-3 py-3 bg-slate-200 text-base rounded-2xl'
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        className='px-3 py-3 bg-slate-200 text-base rounded-2xl'
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        className='px-3 py-3 bg-slate-200 text-base rounded-2xl'
                        placeholder="Phone"
                        value={phone}
                        onChangeText={setphone}
                    />
                    <TextInput
                        className='px-3 py-3 bg-slate-200 text-base rounded-2xl'
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity className='bg-indigo-500 px-2 py-3 rounded-2xl hover:bg-rose-400 cursor-pointer mb-[20px]'>
                    <Text className='text-center font-bold text-white text-lg'>Register</Text>
                </TouchableOpacity>
                <View className='flex flex-row justify-center gap-1 mb-4'>

                    <Text className='text-center '>Already have an account?</Text>
                    <Link href={'/auth/login'} className='text-center text-indigo-500'>Login</Link>
                </View>
            </View>
        </View>
    )
}